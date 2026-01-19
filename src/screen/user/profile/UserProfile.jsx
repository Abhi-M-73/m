import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import { useSelector } from "react-redux";
import ReusableButton from "../../../components/ui/ReusableButton";
import { CircleUser, Mail, Phone, User, File } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../../api/user.api";
import toast from "react-hot-toast";
import Loader from "../../../components/ui/Loader";
import useFetchProfile from "../../../hooks/usefetchProfile";

const UserProfile = () => {
    const { refetch } = useFetchProfile();
    const userInfo = useSelector((state) => state.auth?.user);

    const [formData, setFormData] = useState({
        name: userInfo?.name || "",
        email: userInfo?.email || "",
        phone: userInfo?.phone || "",
        profileImage: userInfo?.profileImage || null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "profileImage") {
            setFormData({ ...formData, profileImage: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const { mutate, isPending } = useMutation({
        mutationFn: updateProfile,
        onSuccess: (data) => {
            toast.success(data?.message || "Profile updated successfully!");
            refetch();
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Update failed!");
        },
    })

    const handleUpdateProfile = () => {
        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("phone", formData.phone);
        payload.append("profileImage", formData.profileImage);
        mutate(payload);
    };

    const accountStatus = userInfo?.status ? "Active" : "Inactive";
    const isActive = Boolean(userInfo?.status);

    const joinedDate = userInfo?.createdAt
        ? new Date(userInfo.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
        : "—";

    const totalInvestment = userInfo?.totalInvestment ?? 0;
    const totalEarnings = userInfo?.totalEarnings ?? 0;

    if (isPending) return <Loader />

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl backdrop-blur-md p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8">
            <div className="flex flex-col items-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-400 pb-6 lg:pb-0 lg:pr-6">
                <div className="relative">
                    <div className="h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                        {userInfo?.profileImage ? (
                            <img src={userInfo?.profileImage} alt="profile" className="w-full h-full object-cover rounded-full" />
                        ) : (
                            userInfo?.name?.charAt(0).toUpperCase()
                        )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                        <CircleUser className="h-5 w-5 text-white" />
                    </div>
                </div>

                <div className="text-center space-y-1">
                    <h1 className="text-xl md:text-2xl font-semibold">
                        {userInfo?.name || "User Name"}
                    </h1>
                </div>

                <div className="w-full grid grid-cols-2 gap-3 mt-2">
                    <div className="border border-gray-300 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-500">Account Status</p>
                        <p
                            className={`text-lg font-semibold mt-1 ${isActive ? "text-[var(--btnColor)]" : "text-red-500"
                                }`}
                        >
                            {accountStatus}
                        </p>
                    </div>

                    <div className="border border-gray-300 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-500">Joined</p>
                        <p className="text-lg font-semibold text-[var(--btnColor)] mt-1">
                            {joinedDate}
                        </p>
                    </div>

                    <div className="border border-gray-300 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-500">Total Investment</p>
                        <p className="text-lg font-semibold text-[var(--btnColor)] mt-1">
                            $ {totalInvestment}
                        </p>
                    </div>

                    <div className="border border-gray-300 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-500">Total Earnings</p>
                        <p className="text-lg font-semibold text-[var(--btnColor)] mt-1">
                            $ {totalEarnings.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg md:text-2xl font-semibold">
                        Profile Details
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                        Update your basic information. These details help us personalize
                        your experience.
                    </p>
                </div>

                <div className="space-y-4">
                    <ReusableForm
                        type="text"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required={true}
                        icon={User}
                    />

                    <ReusableForm
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required={true}
                        icon={Mail}
                    />

                    <ReusableForm
                        type="text"
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required={false}
                        icon={Phone}
                    />

                    <ReusableForm
                        type="file"
                        label="Profile Image"
                        name="profileImage"
                        onChange={handleInputChange}
                        required={false}
                        icon={File}
                    />
                </div>

                <div className="w-full flex items-center justify-end pt-2">
                    <ReusableButton
                        label="Update Profile"
                        onClick={handleUpdateProfile}
                        loading={false}
                        disabled={false}
                        icon={CircleUser}
                        variant="primary"
                        type="button"
                        className="w-fit"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
