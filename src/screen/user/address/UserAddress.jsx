import { CircleDotDashed, Phone, User, MapPin, Home, Building2, MapPinHouse } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addUserAddress, defaultUserAddress, deleteUserAddress, getUserAddress } from "../../../api/address.api";
import Loader from "../../../components/ui/Loader";

const UserAddress = () => {
  const userInfo = useSelector((state) => state.auth?.user);

  const [formData, setFormData] = useState({
    fullName: userInfo?.name || "",
    phone: userInfo?.phone || "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",
    isDefault: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: addUserAddress,
    onSuccess: (data) => {
      toast.success(data?.message || "Address added successfully!");
      queryClient.invalidateQueries(['fetchAddress']);
      setFormData({
        fullName: userInfo?.name || "",
        phone: userInfo?.phone || "",
        city: "",
        state: "",
        pinCode: "",
        country: "India",
        isDefault: false,
      });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  });

  const { mutate: handleDeleteAddress, isPending: isPendingDelete } = useMutation({
    mutationFn: (id) => {
      return deleteUserAddress(id);
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Address deleted successfully!");
      queryClient.invalidateQueries(['fetchAddress']);
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  })


  const { mutate: handleSetDefault, isPending: isPendingSetDefault } = useMutation({
    mutationFn: (id) => {
      return defaultUserAddress(id);
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Address Set as default successfully!");
      queryClient.invalidateQueries(['fetchAddress']);
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  })


  const handleAddAddress = () => {
    mutate({
      fullName: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      state: formData.state,
      pinCode: formData.pinCode,
      country: formData.country,
      isDefault: formData.isDefault,
    });
  }

  const { data } = useQuery({
    queryKey: ['fetchAddress'],
    queryFn: getUserAddress,
    staleTime: 5 * 60 * 1000,
  })


  if (isPending || isPendingDelete || isPendingSetDefault) return <Loader />;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">Address Details</h2>
        <p className="text-sm text-slate-400 mt-1">
          Add or update your delivery address
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <ReusableForm
            type="text"
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
            required
            icon={User}
          />

          <ReusableForm
            type="text"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            required
            icon={Phone}
          />

          <ReusableForm
            type="text"
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
            required
            icon={Building2}
          />

          <ReusableForm
            type="text"
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="State"
            required
            icon={MapPin}
          />

          <ReusableForm
            type="text"
            label="Pincode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
            placeholder="Pincode"
            required
            icon={MapPin}
          />

          <ReusableForm
            type="text"
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Country"
            required
            icon={Home}
          />

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleInputChange}
              className="h-4 w-4"
            />
            <span className="text-sm text-gray-700">
              Set as default address
            </span>
          </div>

          <div className="w-full flex justify-end mt-6">
            <ReusableButton
              label="Save Address"
              onClick={handleAddAddress}
              disabled={isPending}
              icon={Home}
              variant="primary"
              type="button"
              className="w-fit"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Saved Address ({data?.addresses?.length || 0})</h2>

          {data?.addresses?.length === 0 && (
            <p className="text-sm text-gray-500 text-center">
              No address added yet.
            </p>
          )}

          {data?.addresses?.map((address, index) => (
            <div
              key={index}
              className={`relative p-5 border rounded-xl shadow-sm transition 
        ${address.isDefault ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"}
      `}
            >
              {/* Default Badge */}
              {address.isDefault && (
                <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                  Default
                </span>
              )}

              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <User className="h-4 w-4 text-emerald-600" />
                  {address.fullName}
                </h2>

                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  {address.phone}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  {address.city}, {address.state} - {address.pinCode}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Home className="h-4 w-4 text-gray-500" />
                  {address.country}
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between items-center mt-4">
                <button
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                  onClick={() => handleDeleteAddress(address._id)}
                >
                  ❌ Delete
                </button>

                {!address.isDefault && (
                  <button
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    onClick={() => handleSetDefault(address._id)}
                  >
                    ⭐ Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UserAddress;
