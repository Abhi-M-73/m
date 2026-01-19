import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../screen/auth/Login';
import { AuthRoutes, PublicRouteList } from '../routes/Routes';
import AuthMain from '../layout/AuthMain';
import Register from '../screen/auth/Register';
import AdminLogin from '../screen/auth/AdminLogin';
import ForgetPassword from '../screen/auth/ForgetPassword';
import PublicLayout from '../layout/PublicLayout';
import LandingPage from '../layout/LandingPage';
import AllProducts from '../screen/landing/AllProducts';
import AboutUsPage from '../screen/landing/AboutUsPage';
import ContactUsPage from '../screen/landing/ContactUsPage';
import Cart from '../components/common/Cart';
import ProductDetails from '../components/common/ProductDetails';

const Auth = () => {

    return (
        <Routes>
            <Route path={AuthRoutes.USER_REGISTER} element={<AuthMain inner={<Register />} name={"User Register"} />} />
            <Route path={AuthRoutes.USER_LOGIN} element={<AuthMain inner={<Login />} name={"User Login"} />} />
            <Route path={AuthRoutes.FORGET_PASSWORD} element={<AuthMain inner={<ForgetPassword />} name={"Forget Password"} />} />
            <Route path={AuthRoutes.ADMIN_LOGIN} element={<AuthMain inner={<AdminLogin />} name={"Admin Login"} />} />
            <Route path={AuthRoutes.ADMIN_LOGIN} element={<AuthMain inner={<AdminLogin />} name={"Admin Login"} />} />
            
            <Route
                path={PublicRouteList.HOME}
                element={
                    <PublicLayout>
                        <LandingPage />
                    </PublicLayout>
                }
            />
            <Route
                path={PublicRouteList.PRODUCT}
                element={
                    <PublicLayout>
                        <AllProducts />
                    </PublicLayout>
                }
            />

            <Route
                path={PublicRouteList.ABOUT}
                element={
                    <PublicLayout>
                        <AboutUsPage />
                    </PublicLayout>
                }
            />

            <Route
                path={PublicRouteList.CONTACT}
                element={
                    <PublicLayout>
                        <ContactUsPage />
                    </PublicLayout>
                }
            />


            <Route
                path={PublicRouteList.PRODUCT_DETAILS}
                element={
                    <PublicLayout>
                        <ProductDetails />
                    </PublicLayout>
                }
            />

            <Route
                path={PublicRouteList.CART}
                element={
                    <PublicLayout>
                        <Cart />
                    </PublicLayout>
                }
            />
            {/* <Route path="*" element={<Navigate to={AuthRoutes.USER_LOGIN} replace />} /> */}
        </Routes>
    )
}

export default Auth