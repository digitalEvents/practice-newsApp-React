import React, { useState, useEffect } from 'react';
import './Themes.css';

const Themes = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const themeOptions = [
        { title: '🌞 Light Mode', value: 'light', description: 'Bright and clean view.' },
        { title: '🌙 Dark Mode', value: 'dark', description: 'Eye-friendly dark mode.' },
        { title: '💙 Blue Mode', value: 'blue', description: 'Cool blue theme.' },
    ];

    return (
        <div className="themes-page">
            <h2 className="themes-title">Choose Your Theme</h2>
            <div className="themes-grid">
                {themeOptions.map((opt) => (
                    <div
                        key={opt.value}
                        className="themes-card"
                        onClick={() => setTheme(opt.value)}
                    >
                        <h3>{opt.title}</h3>
                        <p>{opt.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Themes;
