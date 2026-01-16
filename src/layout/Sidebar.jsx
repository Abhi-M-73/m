// layout/Sidebar.jsx
import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import SidebarContent from "../routes/SidebarContent";
import { useSelector } from "react-redux";
import { MainContent } from "../utils/mainContent";

const Sidebar = () => {
  const data = useSelector((state) => state.auth);

  const [expandedMenus, setExpandedMenus] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  const roleKey =
    data.role.toLowerCase() === "admin" ? "Admin" : "User";

  const menuItems = SidebarContent[roleKey] || SidebarContent.User;

  const toggleMenu = (itemId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white lg:hidden hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen mainBgColor border-r border-gray-800 text-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 w-64 shadow-2xl`}
      >
        <div className="flex flex-col h-full shadow">
          <div className="p-4  flex items-center gap-3">
            <div>
              <img src={MainContent.appLogo} alt="logo" className="h-20 w-20 object-cover rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl capitalize font-bold text-[var(--btnColor)]">
                {MainContent.appName}
              </h1>
              <p className="text-gray-300 text-sm mt-1">Welcome back</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems?.map((item) => (
              <div key={item.id}>
                {item.link ? (
                  <NavLink
                    to={item.link}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full ${isActive
                        ? "bg-[var(--btnColor)] shadow-lg shadow-blue-600/50 scale-105"
                        : "hover:bg-gray-700 hover:translate-x-1"
                      }`
                    }
                  >
                    <span className="text-white">{item.icon}</span>
                    <span className="font-medium flex-1">{item.name}</span>
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:translate-x-1"
                  >
                    <span className="text-gray-300">{item.icon}</span>
                    <span className="font-medium flex-1 text-left">
                      {item.name}
                    </span>
                    {item.options &&
                      (expandedMenus[item.id] ? (
                        <ChevronDown className="w-5 h-5 text-gray-300" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                      ))}
                  </button>
                )}

                {/* Submenu items */}
                {item.options && expandedMenus[item.id] && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-4">
                    {item.options.map((option) => (
                      <NavLink
                        key={option.id}
                        to={option.link}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg text-sm transition-all duration-200 w-full ${isActive
                            ? "bg-[var(--btnColor)] shadow-lg shadow-[var(--btnColor)]/50 scale-105"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          }`
                        }
                      >
                        {option.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                {data?.user?.username?.charAt(0)?.toUpperCase() || "A"}
              </div>
              <div>
                <p className="font-medium text-sm">{data?.user?.username || "Admin"}</p>
                <p className="text-xs text-gray-400">{data?.user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content spacer */}
      <div className="lg:ml-64">{/* main content yaha render hoga */}</div>
    </>
  );
};

export default Sidebar;
