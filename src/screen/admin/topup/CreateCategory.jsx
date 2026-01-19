import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { Tag, File, AlignLeft, Globe, Eye } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../../../api/category.api";
import toast from "react-hot-toast";
import Loader from "../../../components/ui/Loader";
import { getAllCategories } from "../../../api/category.api";
import { deleteCategory } from "../../../api/category.api";
import { toggleCategory } from "../../../api/category.api";

const CreateCategory = () => {
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        image: null,
        isActive: true,
    });

    const handleInputChange = (e) => {
        const { name, value, files, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: createCategory,
        onSuccess: (data) => {
            toast.success(data?.message || "Category created successfully!");
            queryClient.invalidateQueries(["fetchCategories"]);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to create category");
        },
    });

    const { mutate: handleDelete, isPending: isDeleting } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: (data) => {
            toast.success(data?.message || "Category deleted successfully!");
            queryClient.invalidateQueries(["fetchCategories"]);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to delete category");
        },
    });

    const { mutate: handleToggle, isPending: isToggling } = useMutation({
        mutationFn: toggleCategory,
        onSuccess: (data) => {
            toast.success(data?.message || "Category toggled successfully!");
            queryClient.invalidateQueries(["fetchCategories"]);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to toggle category");
        },
    });

    const { data } = useQuery({
        queryKey: ["fetchCategories"],
        queryFn: getAllCategories,
    });
    console.log("data", data);

    const handleCreateCategory = () => {
        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("slug", formData.slug);
        payload.append("description", formData.description);
        payload.append("categoryImage", formData.image);
        payload.append("isActive", formData.isActive);
        mutate(payload);
    };

    if (isPending || isDeleting || isToggling) return <Loader />;

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-6 md:p-8">

            <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold">Create Category</h2>
                <p className="text-sm text-slate-400 mt-1">
                    Add a new category for your products
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT */}
                <div className="space-y-4">
                    <ReusableForm
                        type="text"
                        label="Category Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Electronics"
                        required
                        icon={Tag}
                    />

                    <ReusableForm
                        type="text"
                        label="Slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder="electronics"
                        required
                        icon={Globe}
                    />

                    <ReusableForm
                        type="textarea"
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Category description..."
                        icon={AlignLeft}
                    />

                    <ReusableForm
                        type="file"
                        label="Category Image"
                        name="image"
                        onChange={handleInputChange}
                        icon={File}
                    />

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    isActive: e.target.checked,
                                }))
                            }
                            className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-700">
                            Category is Active
                        </span>
                    </div>

                    <div className="w-full flex justify-end mt-6">
                        <ReusableButton
                            label="Create Category"
                            onClick={handleCreateCategory}
                            icon={Tag}
                            variant="primary"
                            type="button"
                            className="w-fit"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-semibold">Categories List ({data?.categories?.length || 0})</h2>

                    {data?.categories?.length === 0 && (
                        <p className="text-sm text-gray-500 text-center">
                            No categories found.
                        </p>
                    )}

                    {data?.categories?.map((category) => (
                        <div
                            key={category._id}
                            className={`relative p-5 border rounded-xl shadow-sm transition 
        ${category.isActive ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"}
      `}
                        >
                            {/* Active / Inactive Badge */}
                            <span
                                className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full 
          ${category.isActive ? "bg-emerald-500 text-white" : "bg-gray-400 text-white"}
        `}
                            >
                                {category.isActive ? "Active" : "Inactive"}
                            </span>

                            <div className="flex gap-4 items-start">
                                {/* Image */}
                                {category.image ? (
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-16 w-16 rounded-lg object-cover border"
                                    />
                                ) : (
                                    <div className="h-16 w-16 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                                        No Image
                                    </div>
                                )}

                                {/* Info */}
                                <div className="flex-1 space-y-1">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {category.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        /{category.slug}
                                    </p>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {category.description || "No description"}
                                    </p>
                                </div>
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                                    onClick={() => handleDelete(category._id)}
                                >
                                    ❌ Delete
                                </button>

                                <button
                                    className={`text-sm font-medium 
            ${category.isActive ? "text-orange-600 hover:text-orange-700" : "text-emerald-600 hover:text-emerald-700"}
          `}
                                    onClick={() => handleToggle(category._id)}
                                >
                                    {category.isActive ? "Deactivate" : "Activate"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CreateCategory;
