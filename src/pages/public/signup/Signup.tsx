// import React, { useState } from "react";
// import "./Signup.css";
// import { useNavigate } from "react-router-dom";
// import api from "../../../services/api";
// import logo from "../../../assets/logo1.png";

// const Signup: React.FC = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogoClick = () => {
//         navigate("/");
//     };

//     const handleSignup = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await api.post("/auth/signup", { name, email, password });
//             alert("Signup successful!");
//             navigate("/login");
//         } catch (error: any) {
//             alert(error.response?.data?.message || "Signup failed");
//         }
//     };

//     return (
//         <header className="signup">
//             <div className="signup-top">
//                 <div className="signup-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
//                     <img src={logo} alt="SURYA" />
//                     <h1>SURYA</h1>
//                 </div>
//             </div>
//             <div className="auth-container">
//                 <h2>Create Account</h2>
//                 <form onSubmit={handleSignup}>
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />

//                     <input
//                         type="email"
//                         placeholder="Email address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />

//                     <button type="submit">Sign Up</button>
//                 </form>
//                 <p>
//                     Already have an account? <a href="/login">Login</a>
//                 </p>
//             </div>
//         </header>
//     );
// };

// export default Signup;
// import React, { useState } from "react";
// import "./Signup.css";
// import { useNavigate } from "react-router-dom";
// import api from "../../../services/api";
// import logo from "../../../assets/logo1.png";

// const Signup: React.FC = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [password, setPassword] = useState("");
//     const [agree, setAgree] = useState(true);
//     const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({
//         text: "",
//         type: "",
//     });
//     const navigate = useNavigate();

//     const handleLogoClick = () => {
//         navigate("/");
//     };

//     const handleSignup = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await api.post("/auth/signup", { name, email, mobile, password });

//             // ✅ Success popup
//             setMessage({ text: "Signup successful! Redirecting to login...", type: "success" });

//             setTimeout(() => {
//                 navigate("/login");
//                 setMessage({ text: "", type: "" });
//             }, 1500);
//         } catch (error: any) {
//             // Check for duplicate email or number
//             const msg = error.response?.data?.message || "";
//             let errorMsg = "Signup failed. Try again.";

//             if (
//                 msg.toLowerCase().includes("email already exists") ||
//                 msg.toLowerCase().includes("mobile already exists")
//             ) {
//                 errorMsg =
//                     "This email or mobile number is already registered. Please use a different one.";
//             }

//             setMessage({ text: errorMsg, type: "error" });
//             setTimeout(() => setMessage({ text: "", type: "" }), 3000);
//         }
//     };

//     return (
//         <header className="signup">
//             <div className="signup-top">
//                 <div
//                     className="signup-logo"
//                     onClick={handleLogoClick}
//                     style={{ cursor: "pointer" }}
//                 >
//                     <img src={logo} alt="SURYA" />
//                     <h1>SURYA</h1>
//                 </div>
//             </div>

//             <div className="auth-container">
//                 <h2>Create Account</h2>
//                 <form onSubmit={handleSignup}>
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />

//                     <input
//                         type="email"
//                         placeholder="Email address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     <input
//                         type="text"
//                         placeholder="Mobile number"
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                         required
//                     />

//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />

//                     <label className="agree-checkbox">
//                         <input
//                             type="checkbox"
//                             checked={agree}
//                             onChange={() => setAgree(!agree)}
//                         />
//                         <span>
//                             I agree to receive updates and exclusive offers from <b>SURYA</b>. I can opt out at any time.
//                         </span>
//                     </label>
//                     <button type="submit">Sign Up</button>
//                 </form>
//                 <p>
//                     Already have an account? <a href="/login">Login</a>
//                 </p>
//             </div>

//             {/* ✅ Popup Message */}
//             {message.text && (
//                 <div className={`popup-message ${message.type}`}>
//                     {message.text}
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Signup;
import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import logo from "../../../assets/logo1.png";

const Signup: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(true);
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({
        text: "",
        type: "",
    });

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post("/auth/signup", { name, email, mobile, password });

            // ✅ Show success popup
            setMessage({ text: "Signup successful! Redirecting to login...", type: "success" });

            setTimeout(() => {
                navigate("/login");
                setMessage({ text: "", type: "" });
            }, 1500);
        } catch (error: any) {
            debugger;
            const msg = error.response?.data?.message || "";
            let errorMsg = "Signup failed. Try again.";

            // ✅ Improved detection for duplicate email or mobile
            if (
                msg.toLowerCase().includes("already") ||
                msg.toLowerCase().includes("exist") ||
                msg.toLowerCase().includes("duplicate") ||
                msg.toLowerCase().includes("taken") ||
                msg.toLowerCase().includes("used")
            ) {
                errorMsg =
                    "This email or mobile number is already registered. Please use a different one.";
            }

            setMessage({ text: errorMsg, type: "error" });

            setTimeout(() => setMessage({ text: "", type: "" }), 3000);
        }
    };

    return (
        <header className="signup">
            <div className="signup-top">
                <div
                    className="signup-logo"
                    onClick={handleLogoClick}
                    style={{ cursor: "pointer" }}
                >
                    <img src={logo} alt="SURYA" />
                    <h1>SURYA</h1>
                </div>
            </div>

            <div className="auth-container">
                <h2>Create Account</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label className="agree-checkbox">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                        />
                        <span>
                            I agree to receive updates and exclusive offers from{" "}
                            <b>SURYA</b>. I can opt out at any time.
                        </span>
                    </label>

                    <button type="submit">Sign Up</button>
                </form>

                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>

            {/* ✅ Popup Message */}
            {message.text && (
                <div className={`popup-message ${message.type}`}>
                    {message.text}
                </div>
            )}
        </header>
    );
};

export default Signup;
