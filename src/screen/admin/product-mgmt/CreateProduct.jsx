import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCategories } from "../../../api/category.api";
import {
    Tag,
    File,
    AlignLeft,
    DollarSign,
    Boxes,
    Barcode,
    Star,
    Layers,
    Plus,
    Trash2,
    Palette,
    Ruler
} from "lucide-react";
import { createProduct, updateProduct } from "../../../api/product.api";
import toast from "react-hot-toast";
import Loader from "../../../components/ui/Loader";
import { useLocation } from "react-router-dom";

const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

const CreateProduct = () => {
    const location = useLocation();
    const editableData = location.state || {};
    console.log(editableData);
    const [formData, setFormData] = useState({
        title: editableData.title || "",
        description: editableData.description || "",
        category: editableData.category?._id || "",
        price: editableData.price || "",
        discountPrice: editableData.discountPrice || "",
        variants: editableData.variants?.length
            ? editableData.variants
            : [{ size: "", color: "", stock: "", sku: "" }],
        images: [],
        isActive: editableData.isActive || true,
        isFeatured: editableData.isFeatured || false,
    });


    const { data } = useQuery({
        queryKey: ["fetchCategories"],
        queryFn: getAllCategories,
    });

    // Handle normal inputs
    const handleInputChange = (e) => {
        const { name, value, files, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "file"
                    ? files
                    : type === "checkbox"
                        ? checked
                        : value,
        }));
    };

    // Handle variant change
    const handleVariantChange = (index, field, value) => {
        const updatedVariants = [...formData.variants];
        updatedVariants[index][field] = value;
        setFormData((prev) => ({
            ...prev,
            variants: updatedVariants,
        }));
    };

    // Add new variant
    const addVariant = () => {
        setFormData((prev) => ({
            ...prev,
            variants: [...prev.variants, { size: "", color: "", stock: "", sku: "" }],
        }));
    };

    // Remove variant
    const removeVariant = (index) => {
        const updated = formData.variants.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, variants: updated }));
    };

    const queryClient = useQueryClient();
    const { mutate, isPending: isCreating } = useMutation({
        mutationFn: createProduct,
        onSuccess: (data) => {
            toast.success(data?.message || "Product created successfully!");
            queryClient.invalidateQueries(["fetchProducts"]);
            navigate("/admin/products");
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to create product");
        },
    })

    const { mutate: handleUpdate, isPending: isUpdating } = useMutation({
        mutationFn: updateProduct,
        onSuccess: (data) => {
            toast.success(data?.message || "Product updated successfully!");
            queryClient.invalidateQueries(["fetchProducts"]);
            navigate("/admin/products");
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to update product");
        },
    })

    const handleCreateProduct = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("category", formData.category);
        data.append("price", formData.price);
        data.append("discountPrice", formData.discountPrice);
        data.append("isActive", formData.isActive);
        data.append("isFeatured", formData.isFeatured);
        data.append("variants", JSON.stringify(formData.variants));
        for (let i = 0; i < formData.images.length; i++) {
            data.append("images", formData.images[i]);
        }
        if (editableData._id) {
            handleUpdate({ id: editableData._id, payload: data });
        } else {
            mutate(data);
        }

    };


    if (isCreating || isUpdating) return <Loader />

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-6 md:p-8">

            <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold">Create Product</h2>
                <p className="text-sm text-slate-400 mt-1">
                    Add new product with variants
                </p>
            </div>

            {/* BASIC INFO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-4">
                    <ReusableForm
                        type="text"
                        label="Product Title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="iPhone 15 Pro"
                        required
                        icon={Tag}
                    />

                    <ReusableForm
                        type="select"
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        options={
                            data?.categories?.map((cat) => ({
                                label: cat.name,
                                value: cat._id,
                            })) || []
                        }
                        required
                        icon={AlignLeft}
                    />

                    <ReusableForm
                        type="textarea"
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Full product description"
                        required
                        icon={Layers}
                    />

                    <ReusableForm
                        type="number"
                        label="Price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="99999"
                        required
                        icon={DollarSign}
                    />
                </div>

                <div className="space-y-4">
                    <ReusableForm
                        type="number"
                        label="Discount Price"
                        name="discountPrice"
                        value={formData.discountPrice}
                        onChange={handleInputChange}
                        placeholder="89999"
                        icon={DollarSign}
                    />

                    <ReusableForm
                        type="file"
                        label="Product Images"
                        name="images"
                        onChange={handleInputChange}
                        multiple
                        icon={File}
                    />

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleInputChange}
                            className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-700">Product is Active</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleInputChange}
                            className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-700">Featured Product</span>
                    </div>
                </div>
            </div>

            {/* VARIANTS SECTION */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Product Variants</h3>

                {formData.variants.map((variant, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 border border-gray-400 p-4 rounded-lg"
                    >
                        <ReusableForm
                            type="select"
                            label="Size"
                            value={variant.size}
                            onChange={(e) => handleVariantChange(index, "size", e.target.value)}
                            options={sizeOptions.map(size => ({ label: size, value: size }))}
                            icon={Ruler}
                        />

                        <ReusableForm
                            type="text"
                            label="Color"
                            value={variant.color}
                            onChange={(e) => handleVariantChange(index, "color", e.target.value)}
                            placeholder="Black"
                            icon={Palette}
                        />

                        <ReusableForm
                            type="number"
                            label="Stock"
                            value={variant.stock}
                            onChange={(e) => handleVariantChange(index, "stock", e.target.value)}
                            placeholder="10"
                            icon={Boxes}
                        />

                        <ReusableForm
                            type="text"
                            label="SKU"
                            value={variant.sku}
                            onChange={(e) => handleVariantChange(index, "sku", e.target.value)}
                            placeholder="TS-BLK-M-001"
                            icon={Barcode}
                        />

                        <button
                            onClick={() => removeVariant(index)}
                            className="flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}

                <button
                    onClick={addVariant}
                    className="flex items-center gap-2 text-blue-600 font-medium"
                >
                    <Plus size={18} /> Add Variant
                </button>
            </div>

            {/* SUBMIT */}
            <div className="w-full flex justify-end mt-6">
                <ReusableButton
                    label="Create Product"
                    icon={Star}
                    onClick={handleCreateProduct}
                    disabled={isCreating}
                    variant="primary"
                    type="button"
                    className="w-fit"
                />
            </div>
        </div>
    );
};

export default CreateProduct;
