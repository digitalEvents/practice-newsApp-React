import React, { useEffect, useState } from "react";
import { Search, Menu, ChevronRight, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPages, setFilteredPages] = useState<{ name: string; path: string }[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const regions = [
        { name: "Local", path: "/local" },
        { name: "India", path: "/india" },
        { name: "World", path: "/world" },
    ];

    const topics = [
        { name: "Lifestyle", path: "/lifestyle" },
        { name: "Business", path: "/business" },
        { name: "Finance", path: "/finance" },
        { name: "Sports", path: "/sports" },
        { name: "Politics", path: "/politics" },
        { name: "Technology", path: "/technology" },
        { name: "Entertainment", path: "/entertainment" },
    ];

    const pages = [...regions, ...topics];

    // Filter pages based on search
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredPages([]);
        } else {
            const results = pages.filter((page) =>
                page.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPages(results);
        }
    }, [searchTerm]);

    // Navigate when user presses Enter
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            const foundPage = pages.find(
                (page) => page.name.toLowerCase() === searchTerm.toLowerCase()
            );

            if (foundPage) {
                navigate(foundPage.path);
                setFilteredPages([]);
                setSearchTerm("");
            } else {
                alert("No matching page found.");
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <header className="navbar">
            <div className="navbar-top">
                {/* Logo */}
                <div
                    className="navbar-logo"
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    <img src={logo} alt="SURYA" />
                    <h1>SURYA</h1>
                </div>

                {/* 🔍 Search with live dropdown */}
                <div className="navbar-search">
                    <Search className="icon" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    {searchTerm && (
                        <X
                            className="clear-icon"
                            size={18}
                            onClick={() => {
                                setSearchTerm("");
                                setFilteredPages([]);
                            }}
                        />
                    )}

                    {/* Dropdown suggestions */}
                    {filteredPages.length > 0 && (
                        <ul className="search-dropdown">
                            {filteredPages.map((page) => (
                                <li
                                    key={page.name}
                                    onClick={() => {
                                        navigate(page.path);
                                        setSearchTerm("");
                                        setFilteredPages([]);
                                    }}
                                >
                                    {page.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Right side buttons */}
                <div className="navbar-right">
                    <Link to="/subscribe" className="nav-link-btn">
                        Subscribe
                    </Link>
                    <Link to="/enterprise" className="nav-link-btn">
                        Enterprise
                    </Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="nav-link-btn">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="nav-link-btn">
                            Login
                        </Link>
                    )}
                    {/* <Link to="/themes" className="nav-link-btn">
                        Themes
                    </Link> */}
                    <Menu
                        className="icon menu-icon"
                        onClick={() => setMenuOpen(true)}
                    />
                </div>
            </div>

            {/* NAVBAR LINKS */}
            <nav className="navbar-links">
                {regions.map((region) => (
                    <Link key={region.name} to={region.path} className="nav-item">
                        {region.name}
                    </Link>
                ))}
                {topics.map((topic) => (
                    <Link key={topic.name} to={topic.path} className="nav-item">
                        {topic.name}
                    </Link>
                ))}
            </nav>

            {/* SIDE MENU */}
            {menuOpen && (
                <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
                    <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
                        <div className="menu-header">
                            <h3>Menu</h3>
                            <X
                                size={24}
                                className="close-icon"
                                onClick={() => setMenuOpen(false)}
                            />
                        </div>

                        <div className="menu-section">
                            <h4>Regions</h4>
                            <ul>
                                {regions.map((region) => (
                                    <li key={region.name}>
                                        <Link
                                            to={region.path}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {region.name} <ChevronRight size={14} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h4>Topics</h4>
                            <ul>
                                {topics.map((topic) => (
                                    <li key={topic.name}>
                                        <Link
                                            to={topic.path}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {topic.name} <ChevronRight size={14} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
