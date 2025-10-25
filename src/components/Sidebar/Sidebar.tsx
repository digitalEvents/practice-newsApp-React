import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { Home, Globe, Cpu, Newspaper, Settings } from "lucide-react";

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: "Home", path: "/", icon: <Home size={20} /> },
        { name: "Politics", path: "/politics", icon: <Newspaper size={20} /> },
        { name: "Sports", path: "/sports", icon: <Globe size={20} /> },
        { name: "Technology", path: "/technology", icon: <Cpu size={20} /> },
        { name: "Themes", path: "/themes", icon: <Settings size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src="/logo192.png" alt="Logo" />
                <h3>News App</h3>
            </div>

            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={
                            location.pathname === item.path ? "active sidebar-item" : "sidebar-item"
                        }
                    >
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
