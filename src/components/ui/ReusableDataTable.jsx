import React, { useState, useMemo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { ArrowUp, ArrowDown, Search, Clock, SearchCheck } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { GrDownload } from "react-icons/gr";
import { BiTransferAlt } from "react-icons/bi";
import ReusableForm from "./ReusableForm";

const ReusableDataTable = ({ data = [], columns = [], className = "" }) => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnFilters, setColumnFilters] = useState({});
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [first, setFirst] = useState(0);
    const rows = 15;

    // -------- Filter Data ----------
    const filteredData = useMemo(() => {
        let filtered = data;

        if (globalFilter) {
            filtered = filtered?.filter((row) =>
                Object.values(row).some((val) =>
                    val?.toString()?.toLowerCase().includes(globalFilter?.toLowerCase())
                )
            );
        }

        Object.entries(columnFilters)?.forEach(([col, val]) => {
            if (val) {
                filtered = filtered.filter((row) =>
                    row[col]?.toString().toLowerCase().includes(val.toLowerCase())
                );
            }
        });

        return filtered;
    }, [data, globalFilter, columnFilters]);

    // -------- Sort Data ----------
    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue == null) return 1;
            if (bValue == null) return -1;

            if (typeof aValue === "string" && typeof bValue === "string") {
                const comp = aValue.localeCompare(bValue);
                return sortConfig.direction === "asc" ? comp : -comp;
            }

            if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortConfig]);

    const paginatedData = sortedData?.slice(first, first + rows);

    const handleColumnSearch = (key, value) => {
        setColumnFilters((prev) => ({ ...prev, [key]: value }));
    };

    const getSortIcon = (key) => {
        return (
            <BiTransferAlt className="w-5 h-5 ml-1 rotate-90 hover:text-gray-500" />
        );
    };

    const exportToExcel = () => {
        const exportData = sortedData?.map((row, index) => {
            const obj = { "#": index + 1 }; // SR No
            columns.forEach((col) => {
                obj[col.label] = col.render ? col.render(row[col.key], row, index) : row[col.key];
            });
            return obj;
        });

        const worksheet = XLSX.utils.json_to_sheet(exportData);

        const range = XLSX.utils.decode_range(worksheet['!ref']);
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const address = XLSX.utils.encode_cell({ r: 0, c: C });
            if (!worksheet[address]) continue;
            worksheet[address].s = {
                font: { bold: true },
                alignment: { horizontal: "center" },
            };
        }

        worksheet['!cols'] = [{ wch: 5 }, ...columns.map(() => ({ wch: 20 }))];

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array", cellStyles: true });
        const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(dataBlob, "table_data.xlsx");
    };

    return (
        <div className={`p-4 bg-cardColor border !border-gray-500 text-white rounded-2xl shadow ${className}`}>
            {/* 🔍 Global Search */}
            <div className="flex items-center justify-between mb-5">
                <div className="relative w-1/3">
                    <ReusableForm
                        type="text"
                        name="globalFilter"
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder={"Search Records"}
                        icon={SearchCheck}
                    />

                    {/* <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-8 h-8" /> */}
                </div>
                <button
                    onClick={exportToExcel}
                    className="w-fit border border-[var(--btnColor)] hover:bg-[var(--btnColor)] text-[var(--btnColor)] hover:text-white p-3 rounded-lg shadow"
                >
                    <GrDownload className="text-xl" />
                </button>
            </div>

            {/* 📊 DataTable */}
            <DataTable
                // sortable
                value={paginatedData}
                className="custom-datatable whitespace-nowrap"
                emptyMessage={
                    <div className="text-center text-gray-400 py-10">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="w-6 h-6 border-2 border-slate-500 rounded-full block"></span>
                        </div>
                        <p>No records found</p>
                    </div>
                }
            >
                {columns.map((col, i) => (
                    <Column
                        key={i}
                        field={col.key}
                        header={
                            <div className="flex flex-col">
                                {/* Column label with sort icon */}
                                <div
                                    className={`flex items-center gap-4 text-[1rem] ${col.sortable !== false ? "cursor-pointer" : ""}`}
                                    onClick={() =>
                                        col.sortable !== false &&
                                        setSortConfig((prev) => ({
                                            key: col.key,
                                            direction:
                                                prev.key === col.key && prev.direction === "asc"
                                                    ? "desc"
                                                    : "asc",
                                        }))
                                    }
                                >
                                    {col.label}
                                    {col.sortable !== false && getSortIcon(col.key)}
                                </div>

                                {/* Column search input */}
                                <InputText
                                    value={columnFilters[col.key] || ""}
                                    onChange={(e) => handleColumnSearch(col.key, e.target.value)}
                                    placeholder={`Search ${col.label}`}
                                    className="mt-4 w-full bg-[#1d2630] text-white border !border-gray-500 rounded-lg p-3"
                                    style={{ fontSize: "12px" }}
                                />
                            </div>
                        }
                        body={(row, options) =>
                            col.render
                                ? col.render(row[col.key], row, options.rowIndex)
                                : row[col.key] !== undefined && row[col.key] !== null
                                    ? row[col.key]
                                    : "-"
                        }
                    />
                ))}
            </DataTable>

            {/* 📑 Custom Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-200">
                <span>
                    Showing {first + 1} to {Math.min(first + rows, sortedData?.length)} of{" "}
                    {sortedData?.length} entries
                </span>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={sortedData?.length}
                    onPageChange={(e) => setFirst(e.first)}
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    className="custom-paginator"
                />
            </div>

            {/* 🔧 Custom Styling */}
            <style>{`
                .custom-datatable .p-datatable-thead > tr > th {
                    // background: #1d2630;
                    background: black;
                    color: #e2e8f0;
                    font-weight: 600;
                    font-size: 13px;
                    padding: 12px;
                    
                    
                }
                .custom-datatable .p-datatable-tbody > tr {
                    background: #131920;
                    border-bottom: 1px solid #1e293b;
                }
                .custom-datatable .p-datatable-tbody > tr:nth-child(even) {
                    background: #131922;
                }
                .custom-datatable .p-datatable-tbody > tr:hover {
                    background: #1d2630;
                    transition: 0.2s;
                }
                .custom-datatable .p-datatable-tbody td {
                    padding: 12px;
                    font-size: 14px;
                }
                .custom-paginator {
                    background: #131920 !important;
                    border-radius: 12px;
                    padding: 6px 12px;
                    border: 1px solid #1e293b;
                }
                .custom-paginator .p-paginator-pages .p-paginator-page {
                    background: #1e293b !important;
                    border-radius: 8px;
                    margin: 0 4px;
                    color: #e2e8f0;
                }
                .custom-paginator .p-paginator-pages .p-paginator-page:hover {
                    background: #475569;
                }
                .custom-paginator .p-paginator-first,
                .custom-paginator .p-paginator-prev,
                .custom-paginator .p-paginator-next,
                .custom-paginator .p-paginator-last {
                    color: #cbd5e1;
                    border-radius: 8px;
                    margin: 0 2px;
                    background: #1e293b;
                }
                .custom-paginator .p-paginator-first:hover,
                .custom-paginator .p-paginator-prev:hover,
                .custom-paginator .p-paginator-next:hover,
                .custom-paginator .p-paginator-last:hover {
                    background: #475569;
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default ReusableDataTable;