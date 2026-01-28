import React, { useState, useMemo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Search, SearchCheck } from "lucide-react";
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
    const rows = 12;

    /* ---------------- FILTER ---------------- */
    const filteredData = useMemo(() => {
        let filtered = data;

        if (globalFilter) {
            filtered = filtered.filter((row) =>
                Object.values(row).some((val) =>
                    val?.toString()?.toLowerCase().includes(globalFilter.toLowerCase())
                )
            );
        }

        Object.entries(columnFilters).forEach(([col, val]) => {
            if (val) {
                filtered = filtered.filter((row) =>
                    row[col]?.toString().toLowerCase().includes(val.toLowerCase())
                );
            }
        });

        return filtered;
    }, [data, globalFilter, columnFilters]);

    /* ---------------- SORT ---------------- */
    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue == null) return 1;
            if (bValue == null) return -1;

            if (typeof aValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
        });
    }, [filteredData, sortConfig]);

    const paginatedData = sortedData.slice(first, first + rows);

    const handleColumnSearch = (key, value) => {
        setColumnFilters((prev) => ({ ...prev, [key]: value }));
    };

    const getSortIcon = () => (
        <BiTransferAlt className="w-4 h-4 text-gray-400 rotate-90" />
    );

    /* ---------------- EXPORT ---------------- */
    const exportToExcel = () => {
        const exportData = sortedData.map((row, index) => {
            const obj = { "#": index + 1 };
            columns.forEach((col) => {
                obj[col.label] = col.render
                    ? col.render(row[col.key], row, index)
                    : row[col.key];
            });
            return obj;
        });

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        worksheet["!cols"] = [{ wch: 5 }, ...columns.map(() => ({ wch: 22 }))];

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const dataBlob = new Blob([excelBuffer], {
            type: "application/octet-stream",
        });

        saveAs(dataBlob, "table_data.xlsx");
    };

    return (
        <div
            className={`p-6 bg-white border border-gray-200 text-gray-800 rounded-xl shadow-lg ${className}`}
        >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-5">
                <div className="w-1/3">
                    <ReusableForm
                        type="text"
                        name="globalFilter"
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Search records..."
                        icon={SearchCheck}
                    />
                </div>

                <button
                    onClick={exportToExcel}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                >
                    <GrDownload /> Export
                </button>
            </div>

            {/* TABLE */}
            <DataTable
                value={paginatedData}
                className="custom-datatable whitespace-nowrap"
                emptyMessage={
                    <div className="text-center text-gray-400 py-3">
                        <Search className="w-5 h-5 mx-auto" />
                        <p>No records found</p>
                    </div>
                }
            >
                {columns.map((col, i) => (
                    <Column
                        key={i}
                        field={col.key}
                        header={
                            <div className="flex flex-col gap-2">
                                <div
                                    className={`flex items-center gap-2 font-semibold cursor-pointer`}
                                    onClick={() =>
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
                                    {getSortIcon()}
                                </div>
                            </div>
                        }
                        body={(row, options) =>
                            col.render
                                ? col.render(row[col.key], row, options.rowIndex)
                                : row[col.key] ?? "-"
                        }
                    />
                ))}
            </DataTable>

            {/* PAGINATION */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <span>
                    Showing {first + 1} to{" "}
                    {Math.min(first + rows, sortedData.length)} of{" "}
                    {sortedData.length} entries
                </span>

                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={sortedData.length}
                    onPageChange={(e) => setFirst(e.first)}
                    template="PrevPageLink PageLinks NextPageLink"
                    className="custom-paginator"
                />
            </div>

            {/* WHITE THEME STYLES */}
            <style>{`
        .custom-datatable .p-datatable-thead > tr > th {
          background: #f9fafb;
          color: #374151;
          font-weight: 600;
          font-size: 13px;
          padding: 14px;
          border-bottom: 1px solid #e5e7eb;
        }

        .custom-datatable .p-datatable-tbody > tr {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        .custom-datatable .p-datatable-tbody > tr:hover {
          background: #f3f4f6;
          transition: 0.2s;
        }

        .custom-datatable .p-datatable-tbody td {
          padding: 14px;
          font-size: 14px;
          color: #374151;
        }

        .custom-paginator {
          background: #ffffff !important;
          border-radius: 10px;
          padding: 6px 12px;
          border: 1px solid #e5e7eb;
        }

        .custom-paginator .p-paginator-page {
          background: #f3f4f6 !important;
          border-radius: 6px;
          margin: 0 4px;
          color: #374151;
        }

        .custom-paginator .p-paginator-page:hover {
          background: #e5e7eb;
        }
      `}</style>
        </div>
    );
};

export default ReusableDataTable;
