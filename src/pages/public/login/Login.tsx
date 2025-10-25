import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import logo from "../../../assets/logo1.png";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({
        text: "",
        type: "",
    });
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowForgetPassword(false);

        try {
            const response = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);

            setMessage({ text: "Login successful! Redirecting...", type: "success" });

            setTimeout(() => {
                navigate("/");
                setMessage({ text: "", type: "" });
            }, 1500);
        } catch (error: any) {
            setMessage({ text: "Login failed! Please check your credentials.", type: "error" });
            setShowForgetPassword(true);

            setTimeout(() => setMessage({ text: "", type: "" }), 3000);
        }
    };

    return (
        <header className="login">
            <div className="login-top">
                <div
                    className="login-logo"
                    onClick={handleLogoClick}
                    style={{ cursor: "pointer" }}
                >
                    <img src={logo} alt="SURYA" />
                    <h1>SURYA</h1>
                </div>
            </div>

            <div className="auth-container">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                {showForgetPassword && (
                    <a href="/forget-password" className="forget-password">
                        Forgot Password?
                    </a>
                )}

                <p>
                    Don’t have an account? <a href="/signup">Sign up</a>
                </p>
            </div>

            {message.text && (
                <div className={`popup-message ${message.type}`}>
                    {message.text}
                </div>
            )}
        </header>
    );
};

export default Login;
