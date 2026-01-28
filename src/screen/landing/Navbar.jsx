import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { Menu, X, ShoppingCart, User, LayoutDashboard, LogOut, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import Loader from "../../components/ui/Loader";

const NAV_LINKS = [
  { name: "Home", target: "/" },
  { name: "Products", target: "/products" },
  { name: "About Us", target: "/about" },
  { name: "Contact", target: "/contact" },
];

export default function Header() {
  const { token, role } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartCount] = useState(2);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      next ? disablePageScroll() : enablePageScroll();
      return next;
    });
  };

  const closeMobileMenu = () => {
    setOpen(false);
    enablePageScroll();
  };


  const handleLogout = () => {
    closeMobileMenu();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(logout());
      navigate('/');
    }, 1000);
  };


  if (loading) return <Loader />;

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white border-b border-yellow-500/20 shadow-[0_6px_30px_-10px_rgba(251,191,36,0.25)]"
          : "bg-black/30 border-b border-white/5",
      ].join(" ")}
    >

      <div className="w-full bg-black/80 px-4 sm:px-6 py-2 lg:px-8 border-b border-yellow-400/20">
        <div className="h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <NavLink to="/" className="text-3xl text-white font-extrabold tracking-tight">
              E{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                MART
              </span>
            </NavLink>
            <span className="ml-1 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:scale-110 transition" />
          </button>

          {/* Desktop Nav (centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.target}
                className="relative text-md font-semibold cursor-pointer transition-colors
            text-slate-200 hover:text-yellow-300
            after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-600
            after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {token && role === "user" && (
              <button
                onClick={() => navigate("/cart")}
                className="relative p-2 rounded-full border-2 border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/30 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

            {token && role === "user" && (
              <button
                onClick={() => navigate("/wishlist")}
                className="relative p-2 rounded-full border-2 border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/30 transition"
              >
                <Heart className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={() => {
                if (token && role === "user") {
                  navigate("/dashboard");
                } else {
                  navigate("/login");
                }
              }}
              className="rounded-full p-2 border-2 border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/30 transition"
            >
              {token && role === "user" ? (
                <LayoutDashboard className="w-5 h-5" />
              ) : (
                <User className="w-5 h-5" />
              )}
            </button>

            {
              token && (
                <button
                  onClick={handleLogout}
                  className="rounded-full p-2 border-2 border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/30 transition"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              )
            }
          </div>

          <button
            onClick={toggle}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg
        border border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/10"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        onClick={() => open && toggle()}
        className={[
          "lg:hidden fixed inset-0 z-40 transition",
          open
            ? "bg-black/60 backdrop-blur-[2px] opacity-100 visible"
            : "opacity-0 invisible",
        ].join(" ")}
      />

      <div
        className={[
          "lg:hidden fixed top-[2px] left-0 right-0 z-50 mx-3 rounded-2xl",
          "border border-yellow-400/20 bg-black/90 backdrop-blur-2xl",
          "transition-all duration-300",
          open
            ? "translate-y-[70px] opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav className="py-4">
          <ul className="px-4 flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <li key={link.name} style={{ animation: `slideUp 0.35s ease ${0.03 * i}s both` }}>
                <NavLink
                  key={link.name}
                  to={link.target}
                  onClick={closeMobileMenu}
                  className="block w-full rounded-xl px-4 py-3 text-md font-medium
                    text-slate-200 hover:text-yellow-300 hover:bg-yellow-500/10"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {
              token && role === "user" && (
                <li>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/wishlist");
                    }}
                    className="w-full rounded-xl px-4 py-3 text-lg font-semibold
                  text-yellow-300 border border-yellow-400/30
                  hover:bg-yellow-500/10 transition flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" /> View Wishlist ({cartCount})
                  </button>
                </li>
              )
            }

            {/* Cart */}
            {
              token && role === "user" && (
                <li>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/cart");
                    }}
                    className="w-full rounded-xl px-4 py-3 text-lg font-semibold
                  text-yellow-300 border border-yellow-400/30
                  hover:bg-yellow-500/10 transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" /> View Cart ({cartCount})
                  </button>
                </li>
              )
            }

            {/* Login */}
            <li>
              <button
                onClick={() => {
                  if (token && role === "user") {
                    closeMobileMenu();
                    navigate("/dashboard");
                  } else {
                    closeMobileMenu();
                    navigate("/login");
                  }
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3
                  text-black font-semibold text-lg
                  bg-gradient-to-r from-yellow-400 to-yellow-500
                  shadow-[0_8px_24px_rgba(251,191,36,0.35)]
                  hover:scale-[1.02] active:scale-95 transition"
              >
                {token && role === "user" ? <LayoutDashboard className="w-5 h-5" /> : <User className="w-5 h-5" />}
                {token && role === "user" ? "Dashboard" : "Login"}
              </button>
            </li>

            {/* logout  */}
            {
              token && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3
                  text-white font-semibold text-lg
                  bg-gradient-to-r from-gray-600 to-gray-900
                  shadow-[0_8px_24px_rgba(251,191,36,0.35)]
                  hover:scale-[1.02] active:scale-95 transition"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </li>
              )
            }
          </ul>
        </nav>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
