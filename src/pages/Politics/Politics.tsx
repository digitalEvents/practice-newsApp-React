import React from 'react';
import { useNavigate } from 'react-router-dom';

const Politics = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title: 'Politics',
            description: 'Latest updates from politics.',
            path: '/politics',
        }
    ];
    return (
        // <div>
        //     Politics
        // </div>
        <div className="homepage">
            {/* <h2 className="homepage-title">News Application</h2> */}
            <div className="homepage-container">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className="homepage-card"
                        onClick={() => navigate(cat.path)}
                    >
                        <h3>{cat.title}</h3>
                        <p>{cat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Politics;

