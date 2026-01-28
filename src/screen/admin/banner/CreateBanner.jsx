import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { Tag, Image, AlignLeft, Star, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../../../components/ui/Loader";
import { createBanner, deleteBanner, getAllAdminBanners, toggleBannerStatus } from "../../../api/banner.api";

const CreateBanner = () => {
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        tagline: "",
        title: "",
        description: "",
        image: null,
        isActive: true,
    });

    const handleInputChange = (e) => {
        const { name, value, files, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "file"
                    ? files[0]
                    : type === "checkbox"
                        ? checked
                        : value,
        }));
    };

    const { mutate, isPending } = useMutation({
        mutationFn: createBanner,
        onSuccess: () => {
            toast.success("Banner created successfully!");
            queryClient.invalidateQueries(["fetchBanners"]);
            formData({
                tagline: "",
                title: "",
                description: "",
                image: null,
                isActive: true,
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to create banner");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("tagline", formData.tagline);
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("image", formData.image);
        data.append("isActive", formData.isActive);
        mutate(data);
    };

    const { data } = useQuery({
        queryKey: ["fetchAdminBanners"],
        queryFn: getAllAdminBanners,
    });

    const { mutate: removeBanner } = useMutation({
        mutationFn: deleteBanner,
        onSuccess: () => {
            toast.success("Banner deleted");
            queryClient.invalidateQueries(["fetchAdminBanners"]);
        },
    });

    const { mutate: toggleStatus } = useMutation({
        mutationFn: toggleBannerStatus,
        onSuccess: () => {
            toast.success("Banner status updated");
            queryClient.invalidateQueries(["fetchAdminBanners"]);
        },
    });

    if (isPending) return <Loader />;

    return (
        <div className="min-h-screen space-y-5">
            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8">

                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold">Create Banner</h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Add new homepage banner
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ReusableForm
                        type="text"
                        label="Tagline"
                        name="tagline"
                        value={formData.tagline}
                        onChange={handleInputChange}
                        placeholder="Big Sale 2026"
                        required
                        icon={Tag}
                    />
                    <ReusableForm
                        type="text"
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Up to 50% Off"
                        required
                        icon={Star}
                    />
                    <ReusableForm
                        type="textarea"
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Limited time offers on electronics"
                        required
                        icon={AlignLeft}
                    />
                    <ReusableForm
                        type="file"
                        label="Banner Image"
                        name="image"
                        onChange={handleInputChange}
                        required
                        icon={Image}
                    />
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleInputChange}
                        className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-700">Banner is Active</span>
                </div>

                <div className="flex justify-end mt-6">
                    <ReusableButton
                        label="Create Banner"
                        onClick={handleSubmit}
                        disabled={isPending}
                        variant="primary"
                    />
                </div>
            </div>
            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6">Banner List</h2>

                <div>
                    {
                        data?.banners?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {data?.banners?.map((banner) => (
                                    <div
                                        key={banner._id}
                                        className="border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                                    >
                                        <img
                                            src={banner.image}
                                            alt={banner.title}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="p-4">
                                            <div className="flex items-center justify-between flex-wrap">
                                                <h3 className="text-lg font-semibold">{banner.title}</h3>
                                                <span className="bg-amber-200 text-amber-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{banner.tagline}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">{banner.description}</p>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        onClick={() => toggleStatus(banner._id)}
                                                        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-all ${banner.isActive ? "bg-green-500" : "bg-gray-300"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`bg-white w-4 h-4 rounded-full shadow transform transition-all ${banner.isActive ? "translate-x-4" : "translate-x-0"
                                                                }`}
                                                        />
                                                    </div>

                                                    <span
                                                        className={`text-sm font-medium ${banner.isActive ? "text-green-500" : "text-gray-500"}`}
                                                    >
                                                        {banner.isActive ? "Active" : "Inactive"}
                                                    </span>
                                                </div>


                                                {/* Delete */}
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Delete this banner?")) {
                                                            removeBanner(banner._id);
                                                        }
                                                    }}
                                                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-600">No banner found</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateBanner;
