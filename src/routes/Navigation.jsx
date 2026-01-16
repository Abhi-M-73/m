import Authenticate from "../routes/Authenticate";
import Auth from "../routes/Auth";
import { useSelector } from "react-redux";
import PublicRoutes from "../routes/PublicRoutes";
import ScrollToTop from "../components/ui/ScrollToTop";


const Navigation = () => {
    const { isAuthenticated, role } = useSelector(state => state.auth);

    return (
        <>
            <ScrollToTop />
            {!isAuthenticated && <PublicRoutes />}
            {!isAuthenticated && <Auth />}
            {isAuthenticated &&  <Authenticate />}
        </>
    );
};

export default Navigation;
