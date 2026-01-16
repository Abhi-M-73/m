import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const DashboardMain = ({ inner, name = "user", }) => {
    const { role } = useSelector((state) => state?.auth);
    const { email, username } = useSelector((state) => state?.auth?.user) || {};

    return (
        <div className="min-h-screen mainBgColor text-white">
            <Sidebar userRole={role} />
            <div className="lg:ml-64">
                <div className="">
                    <DashboardHeader name={name} email={email} username={username} />
                    <main className="p-5">
                        {inner}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
