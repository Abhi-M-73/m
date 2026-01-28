import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import UserDashboard from '../screen/user/UserDashboard';
import DashboardMain from '../layout/DashboardMain';
import AdminDashboard from '../screen/admin/AdminDashboard';
import { AuthenicatedRoutes } from '../routes/Routes';
import UserDeposit from '../screen/user/payment/UserDeposit';
import UserMakeInvestment from '../screen/user/investment/UserMakeInvestment';
import UserInvestmentHistory from '../screen/user/investment/UserInvestmentHistory';
import UserProfile from '../screen/user/profile/UserProfile';
import UserRaiseTicket from '../screen/user/support/UserRaiseTicket';
import UserRaiseTicketHistory from '../screen/user/support/UserRaiseTicketHistory';
import UserAddress from '../screen/user/address/UserAddress';
import CreateCategory from '../screen/admin/product-mgmt/CreateCategory';
import ProductList from '../screen/admin/product-mgmt/ProductList';
import CreateProduct from '../screen/admin/product-mgmt/CreateProduct';
import CreateBanner from '../screen/admin/banner/CreateBanner';
import AdminAllTeam from '../screen/admin/team/AdminAllTeam';

const Authenticate = () => {
    const { role } = useSelector((state) => state.auth);

    return (
        <Routes>
            {role === "user" && (
                <>
                    <Route
                        path={AuthenicatedRoutes.USER_DASHBOARD}
                        element={
                            <DashboardMain inner={<UserDashboard />} name="User Dashboard" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_ADDRESS}
                        element={
                            <DashboardMain inner={<UserAddress />} name="User Address" />
                        }
                    />


                    <Route
                        path={AuthenicatedRoutes.USER_DEPOSIT}
                        element={
                            <DashboardMain inner={<UserDeposit />} name="User Deposit" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_MAKE_INVESTMENT}
                        element={
                            <DashboardMain inner={<UserMakeInvestment />} name="User Make Investment" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_INVESTMENT_HISTORY}
                        element={
                            <DashboardMain inner={<UserInvestmentHistory />} name="User Investment History" />
                        }
                    />

                    <Route
                        path={AuthenicatedRoutes.USER_RAISE_TICKET}
                        element={
                            <DashboardMain inner={<UserRaiseTicket />} name="Raise Ticket" />
                        }
                    />

                    <Route
                        path={AuthenicatedRoutes.USER_RAISE_TICKET_HISTORY}
                        element={
                            <DashboardMain inner={<UserRaiseTicketHistory />} name="Raise Ticket History" />
                        }
                    />


                    <Route
                        path={AuthenicatedRoutes.USER_PROFILE}
                        element={
                            <DashboardMain inner={<UserProfile />} name="User Profile" />
                        }
                    />

                    {/* <Route path="*" element={<Navigate to={AuthenicatedRoutes.USER_DASHBOARD} />} /> */}
                </>
            )}




            {role === "admin" && (
                <>
                    <Route
                        path={AuthenicatedRoutes.LANDING}
                        element={<Navigate to={AuthenicatedRoutes.ADMIN_DASHBOARD} replace />}
                    />

                    <Route
                        path={AuthenicatedRoutes.ADMIN_DASHBOARD}
                        element={
                            <DashboardMain inner={<AdminDashboard />} name="Admin Dashboard" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.ADMIN_TEAM}
                        element={
                            <DashboardMain inner={<AdminAllTeam />} name="All Users" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.CREATE_CATEGORY}
                        element={
                            <DashboardMain inner={<CreateCategory />} name="Create Category" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.CREATE_PRODUCT}
                        element={
                            <DashboardMain inner={<CreateProduct />} name="Create Product" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.PRODUCT_LIST}
                        element={
                            <DashboardMain inner={<ProductList />} name="Product List" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.CREATE_BANNER}
                        element={
                            <DashboardMain inner={<CreateBanner />} name="Create Banner" />
                        }
                    />
                </>
            )}

            {/* <Route path="*" element={<Navigate to={AuthenicatedRoutes.ADMIN_DASHBOARD} />} /> */}
        </Routes>
    );
};

export default Authenticate;
