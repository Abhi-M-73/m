import { useState } from "react";
import { Coins, Wallet, TrendingUp } from "lucide-react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { makeInvestment } from "../../../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ResponseModel from "../../../components/ui/ResponseModel";

const UserMakeInvestment = () => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState("");
    const [modal, setModal] = useState(null);

    const { mutate, isPending } = useMutation({
        mutationFn: makeInvestment,
        onSuccess: (data) => {
            setModal({
                variant: "success",
                title: "Investment Successful",
                message: data?.message || "Your investment was successful.",
            });
            setAmount("");
            queryClient.invalidateQueries({ queryKey: ["investmentHistory"] });
        },
        onError: (error) => {
            setModal({
                variant: "error",
                title: "Investment Failed",
                message:
                    error?.response?.data?.message ||
                    "An error occurred while making the investment.",
            });
        },
    });

    const handleDeposit = () => {
        if (!amount || Number(amount) <= 0) {
            setModal({
                variant: "warning",
                title: "Invalid Amount",
                message: "Please enter a valid amount to invest.",
            });
            return;
        }
        mutate({ amount });
    };

    return (
        <>
            {/* Page Container */}
            <div className="w-full border border-slate-700 rounded-xl shadow-xl backdrop-blur-md p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr] gap-10">

                {/* LEFT SIDE — Investment Graphic & Info */}
                <div className="hidden md:flex flex-col items-center justify-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">

                    {/* Wallet Icon */}
                    <div className="relative">
                        <div className="h-40 w-40 rounded-full bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-600 flex items-center justify-center shadow-2xl">
                            <Wallet className="h-20 w-20 text-white" />
                        </div>

                        <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-full bg-lime-500 flex items-center justify-center shadow-md">
                            <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                    </div>

                    <div className="text-center space-y-2 px-2">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Smart Investment Zone
                        </h2>
                        <p className="text-sm text-slate-300">
                            Grow your wealth by making secure and instant investments.
                        </p>
                    </div>

                    {/* INFO CARDS */}
                    <div className="w-full mt-2 grid grid-cols-1 gap-3 text-sm">
                        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
                            <p className="text-slate-300 font-medium">Instant Processing</p>
                            <p className="text-xs text-slate-400 mt-1">
                                Your investment is processed instantly and securely.
                            </p>
                        </div>
                        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
                            <p className="text-slate-300 font-medium">Guaranteed Tracking</p>
                            <p className="text-xs text-slate-400 mt-1">
                                View complete investment history inside your dashboard.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — Form */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-[var(--btnColor)] text-center lg:text-left">
                        Make Investment
                    </h1>

                    <ReusableForm
                        label="Deposit Amount"
                        name="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount to deposit"
                        required={true}
                        icon={Coins}
                    />

                    <ReusableButton
                        label="Make Investment"
                        type="button"
                        variant="primary"
                        onClick={handleDeposit}
                        loading={isPending}
                        icon={Coins}
                    />
                </div>
            </div>

            {/* MODAL */}
            <ResponseModel
                open={modal !== null}
                onClose={() => setModal(null)}
                variant={modal?.variant || "success"}
                title={modal?.title || "Investment Status"}
                message={modal?.message || ""}
                confirmLabel="Ok!"
            />
        </>
    );
};

export default UserMakeInvestment;
