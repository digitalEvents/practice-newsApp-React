import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    const hideNavbarPaths = ["/login", "/signup", "/forget-password"];

    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

    return (
        <>
            {!shouldHideNavbar && <Navbar />}
            <main>{children}</main>
        </>
    );
};

export default Layout;
