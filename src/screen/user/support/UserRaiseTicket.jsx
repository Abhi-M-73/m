import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import {
  Bot,
  FileText,
  MessageCircle,
  UploadCloud,
  HelpCircle,
} from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { raiseTicket } from "../../../api/user.api";

const UserRaiseTicket = () => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    attachments: [], // will store File[]
  });

  const handleInputChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      const fileArray = Array.from(files || []);
      console.log("FILES FROM INPUT 👉", fileArray);

      setFormData((prev) => ({
        ...prev,
        attachments: fileArray,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: raiseTicket,
    onSuccess: (data) => {
      toast.success(data?.message || "Ticket raised successfully!");
      setFormData({
        subject: "",
        message: "",
        attachments: [],
      });
      queryClient.invalidateQueries({ queryKey: ["raiseTicketHistory"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Ticket raise failed. Please try again."
      );
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("FORM DATA STATE 👉", formData);

    if (!formData.subject || !formData.message) {
      return toast.error("Please fill in all required fields.");
    }

    const form = new FormData();
    form.append("subject", formData.subject);
    form.append("description", formData.message);

    if (formData.attachments && formData.attachments.length > 0) {
      formData.attachments.forEach((file) => {
        // "file" yahi naam backend me jo expected ho, woh rakho
        form.append("files", file);
      });
    }

    // Debug: check exactly kya jaa raha hai
    for (const [key, value] of form.entries()) {
      console.log("FORM ENTRY 👉", key, value);
    }

    mutate(form);
  };

  return (
    <div className="w-full border border-slate-600 rounded-xl shadow-xl backdrop-blur-md p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8">
      {/* Left Side - Info / Illustration */}
      <div className="hidden md:flex flex-col items-center justify-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
        <div className="relative">
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
            <Bot className="h-20 w-20 text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
            <HelpCircle className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="text-center space-y-2 px-2">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Smart Support Assistant
          </h2>
          <p className="text-sm text-slate-300">
            Raise a ticket for any issue or query. Our support team will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="w-full mt-2 grid grid-cols-1 gap-3 text-sm">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
            <p className="text-slate-300 font-medium">Quick Response</p>
            <p className="text-xs text-slate-400 mt-1">
              Raise a ticket and track your queries easily from your dashboard.
            </p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
            <p className="text-slate-300 font-medium">Attach Screenshots</p>
            <p className="text-xs text-slate-400 mt-1">
              Add images to explain your issue better for faster resolutions.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="space-y-6">
        <div>
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            Raise a Support Ticket
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Share the details of your issue or question. Please be specific so
            we can help you quickly.
          </p>
        </div>

        <div className="space-y-4">
          <ReusableForm
            type="text"
            label="Subject"
            name="subject"
            placeholder="Enter your subject"
            required={true}
            icon={FileText}
            onChange={handleInputChange}
            value={formData.subject}
          />

          <ReusableForm
            type="textarea"
            label="Message / Description"
            name="message"
            placeholder="Describe your issue in detail..."
            required={true}
            icon={MessageCircle}
            rows={3}
            onChange={handleInputChange}
            value={formData.message}
          />

          <ReusableForm
            type="file"
            label="Attach Image (Optional)"
            name="attachments"
            icon={UploadCloud}
            onChange={handleInputChange}
            // agar multiple files allow karna ho to:
            multiple
            // accept="image/*" // agar sirf images allow karne ho
          />
        </div>

        <div className="w-full flex items-center justify-end pt-2">
          <ReusableButton
            label="Submit Ticket"
            onClick={handleFormSubmit}
            loading={isPending}
            disabled={isPending}
            icon={HelpCircle}
            variant="primary"
            type="button"
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default UserRaiseTicket;
