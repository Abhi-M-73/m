import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ReusableDataTable from "../../../components/ui/ReusableDataTable";
import { getAllProducts, deleteProduct } from "../../../api/product.api";
import { dateFormatter, formatCurrency } from "../../../utils/additionalFn";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/ui/Loader";

const ProductList = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["fetchProducts"],
        queryFn: getAllProducts,
    });

    const { mutate: removeProduct, isPending } = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            toast.success("Product deleted successfully");
            queryClient.invalidateQueries(["fetchProducts"]);
        },
        onError: () => {
            toast.error("Failed to delete product");
        },
    });

    const columns = [
        { label: "#", key: "sr", render: (v, r, i) => i + 1 },

        {
            label: "Image",
            key: "images",
            render: (value) => (
                <img
                    src={value?.[0]?.url}
                    alt="product"
                    className="w-12 h-12 object-cover rounded-lg border border-gray-300"
                />
            ),
        },

        { label: "Title", key: "title" },

        {
            label: "Category",
            key: "category",
            render: (value) => value?.name || "N/A",
        },

        {
            label: "Price",
            key: "price",
            render: (value) => formatCurrency(value),
        },

        {
            label: "Discount",
            key: "discountPrice",
            render: (value) => formatCurrency(value),
        },

        {
            label: "Stock",
            key: "variants",
            render: (value) => value?.[0]?.stock || 0,
        },
        {
            label: "Variants",
            key: "variants",
            render: (variants) => (
                <div className="flex flex-col gap-1 text-sm">
                    {variants?.map((v, i) => (
                        <div
                            key={i}
                            className="bg-gray-100 px-2 py-1 rounded-md"
                        >
                            {v.size} / {v.color} — Stock: {v.stock}
                        </div>
                    ))}
                </div>
            ),
        },
        {
            label: "Status",
            key: "isActive",
            render: (value) => (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                >
                    {value ? "Active" : "Inactive"}
                </span>
            ),
        },

        {
            label: "Created",
            key: "createdAt",
            render: (value) => dateFormatter(value),
        },

        {
            label: "Actions",
            key: "actions",
            render: (_, row) => (
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(`/admin/create-product`, { state: row })}
                        className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
                    >
                        <Pencil size={18} />
                    </button>

                    <button
                        onClick={() => removeProduct(row._id)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            ),
        },
    ];


    if (isLoading || isPending) return <Loader />

    return (
        <div>
            <ReusableDataTable data={data?.product || []} columns={columns} />
        </div>
    );
};

export default ProductList;
