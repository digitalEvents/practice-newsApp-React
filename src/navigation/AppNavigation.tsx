// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from '../pages/public/login/Login';
// import Signup from '../pages/public/signup/Signup';

// const AppNavigation = () => {
//     return (
//         <Routes>
//             <Route path="/login" element={< Login />} />
//             <Route path="/signup" element={< Signup />} />
//         </Routes>
//     );
// }

// export default AppNavigation;
import React from "react";
import { Routes, Route } from "react-router-dom";

// Public pages
import Login from "../pages/public/login/Login";
import Signup from "../pages/public/signup/Signup";

// Region pages
import Local from "../pages/local/Local";
// import India from "../pages/local/India";
// import World from "../pages/local/World";

// // Topic pages
// import Politics from "../pages/Politics/Politics";
// import Sports from "../pages/Sports/Sports";
// import Business from "../pages/Business/Business";
// import Technology from "../pages/Technology/Technology";
// import Entertainment from "../pages/Entertainment/Entertainment";
// import Finance from "../pages/Finance/Finance";
// import Lifestyle from "../pages/Lifestyle/Lifestyle";
import Homepage from "../pages/home/Homepage";
import Technology from "../pages/Technology/Technology";
import Sports from "../pages/Sports/Sports";
import Politics from "../pages/Politics/Politics";
import ForgetPassword from "../pages/public/forgetPassword/ForgetPassword";
import Themes from "../themes/Themes";


const AppNavigation = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />


            <Route path="/local" element={<Local />} />
            {/* <Route path="/india" element={<India />} />
            <Route path="/world" element={<World />} /> */}

            <Route path="/politics" element={<Politics />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/themes" element={<Themes />} />
            {/* <Route path="/business" element={<Business />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/lifestyle" element={<Lifestyle />} /> */}

            <Route path="/" element={<Homepage />} />
        </Routes>
    );
};

export default AppNavigation;
