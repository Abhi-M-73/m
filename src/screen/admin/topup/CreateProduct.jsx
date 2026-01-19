import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../api/category.api";
import {
    Tag,
    File,
    AlignLeft,
    DollarSign,
    Boxes,
    Barcode,
    Star,
    Layers
} from "lucide-react";

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        shortDescription: "",
        category: "",
        price: "",
        discountPrice: "",
        stock: "",
        sku: "",
        images: [],
        isActive: true,
        isFeatured: false,
    });

    const { data } = useQuery({
        queryKey: ["fetchCategories"],
        queryFn: getAllCategories,
    });

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

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-6 md:p-8">

            <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold">Create Product</h2>
                <p className="text-sm text-slate-400 mt-1">
                    Add new product to your store
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT COLUMN */}
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
                        type="text"
                        label="Slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder="iphone-15-pro"
                        required
                        icon={Layers}
                    />

                    <ReusableForm
                        type="textarea"
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Full product description"
                        required
                        icon={AlignLeft}
                    />

                    <ReusableForm
                        type="textarea"
                        label="Short Description"
                        name="shortDescription"
                        value={formData.shortDescription}
                        onChange={handleInputChange}
                        placeholder="Short summary"
                        icon={AlignLeft}
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
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-4">
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
                        type="number"
                        label="Stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        placeholder="50"
                        required
                        icon={Boxes}
                    />

                    <ReusableForm
                        type="text"
                        label="SKU"
                        name="sku"
                        value={formData.sku}
                        onChange={handleInputChange}
                        placeholder="SKU-IPHONE15"
                        required
                        icon={Barcode}
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
                        <span className="text-sm text-gray-700">
                            Product is Active
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleInputChange}
                            className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-700">
                            Featured Product
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end mt-6">
                <ReusableButton
                    label="Create Product"
                    icon={Star}
                    variant="primary"
                    type="button"
                    className="w-fit"
                />
            </div>
        </div>
    );
};

export default CreateProduct;
