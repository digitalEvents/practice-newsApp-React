
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import React from 'react';
import AppNavigation from './navigation/appNavigation';

const App = () => {
    return (
        <BrowserRouter>
            <AppNavigation />
        </BrowserRouter>
    );
}

export default App;
