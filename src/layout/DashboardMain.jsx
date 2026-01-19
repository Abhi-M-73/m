import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const DashboardMain = ({ inner, name}) => {
    const { role } = useSelector((state) => state?.auth);
    
    return (
        <div className="min-h-screen mainBgColor text-black">
            <Sidebar userRole={role} />
            <div className="lg:ml-64">
                <div className="">
                    <DashboardHeader headerName={name} />
                    <main className="p-5 bg-gray-50">
                        {inner}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
