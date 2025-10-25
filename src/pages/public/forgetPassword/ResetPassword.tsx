import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // icons
import api from "../../../services/api";
import "./ResetPassword.css";

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const res = await api.post("/auth/reset-password", {
                email,
                newPassword,
            });

            setMessage(res.data.message || "Password reset successful!");
            setTimeout(() => navigate("/login"), 2000); // redirect after success
        } catch (err: any) {
            setMessage(err.response?.data?.message || "Error resetting password");
        }
    };

    return (
        <div className="auth-container">
            <h2>Change Password</h2>

            <form onSubmit={handleSubmit} className="reset-form">
                {/* Email */}
                <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* New Password */}
                <div className="password-field">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                </div>

                {/* Confirm Password */}
                <div className="password-field">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                </div>

                <button type="submit">Change Password</button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default ResetPassword;
