
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import Layout from './components/Layout/Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout children={undefined} />
            <AppNavigation />
        </BrowserRouter>
    );
}

export default App;
