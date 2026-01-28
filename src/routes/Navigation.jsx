import Authenticate from "../routes/Authenticate";
import Auth from "../routes/Auth";
import { useSelector } from "react-redux";
import ScrollToTop from "../components/ui/ScrollToTop";


const Navigation = () => {
    const { isAuthenticated, token } = useSelector(state => state.auth);
    return (
        <>
            <ScrollToTop />
            <Auth />
            {isAuthenticated && token && <Authenticate />}
        </>
    );
};

export default Navigation;
