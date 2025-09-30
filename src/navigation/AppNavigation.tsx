import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/home/homepage';

const AppNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={< Homepage />} />

        </Routes>
    );
}

export default AppNavigation;
