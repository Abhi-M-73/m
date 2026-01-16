import Footer from "../screen/landing/Footer";
import Header from "../screen/landing/Navbar";

const PublicLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="pt-14 bg-black/50">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default PublicLayout;
