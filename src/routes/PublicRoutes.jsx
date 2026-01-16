import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import ProductDetails from "../components/common/ProductDetails";
import { PublicRouteList } from "./Routes";
import Cart from "../components/common/Cart";
import LandingPage from "../layout/LandingPage";
import AboutUsPage from "../screen/landing/AboutUsPage";
import ContactUsPage from "../screen/landing/ContactUsPage";
import AllProducts from "../screen/landing/AllProducts";

const PublicRoutes = () => {
    return (
        <Routes>
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
        </Routes>
    );
};

export default PublicRoutes;
