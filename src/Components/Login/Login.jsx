// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase.config";
// import "./Login.css"; // Import the CSS file
// import Navbar from "../Navbar/Navbar";


// function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Please fill all fields.");
//       return;
//     }
//     setErrorMsg("");
//     setSubmitButtonDisabled(true);

//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(() => {
//         navigate("/"); // Redirect to home after successful login
//       })
//       .catch((err) => {
//         setErrorMsg(err.message);
//       })
//       .finally(() => {
//         setSubmitButtonDisabled(false);
//       });
//   };

//   return (
//     <>

//       <div className="Navbar">
//         <Navbar />
//       </div>


//       <div className="login-container">
//         <div className="innerBox">
//           <h1>Login</h1>

//           <input
//             type="email"
//             placeholder="Enter email address"
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, email: event.target.value }))
//             }
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, pass: event.target.value }))
//             }
//           />

//           <div className="login-footer">
//             {errorMsg && <p className="error">{errorMsg}</p>}
//             <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//               Login
//             </button>
//             <Link to="/">Home</Link>
//             <p>
//               Don't have an account? <Link to="/signup">Sign up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;


















import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
// import Navbar from "../Home/Navbar";
import NavBeforeLog from "../NavBeforeLog/NavBeforeLog";


export default function Component() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("seeker");
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg("Please fill all fields.");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    try {
      await signInWithEmailAndPassword(auth, values.email, values.pass);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMsg("No account found with this email.");
          break;
        case "auth/wrong-password":
          setErrorMsg("Incorrect password.");
          break;
        case "auth/invalid-email":
          setErrorMsg("Please enter a valid email address.");
          break;
        default:
          setErrorMsg("Login failed. Please try again.");
      }
    } finally {
      setSubmitButtonDisabled(false);
    }
  };

  return (
    <>
    <div className="Navbar">
        <NavBeforeLog />
      </div>
    <div className="component">
      <div className="main-container">
        <div className="background-overlay" />
        <div className="content-grid">
          <div className="form-section">
            <div>
              <h2 className="title">Welcome Back</h2>
              <p className="subtitle">Please sign in to your account</p>
            </div>
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === "seeker" ? "active" : ""}`}
                onClick={() => setActiveTab("seeker")}
              >
                Job Seeker
              </button>
              <button
                className={`tab-button ${activeTab === "provider" ? "active" : ""}`}
                onClick={() => setActiveTab("provider")}
              >
                Job Provider
              </button>
            </div>
            <form className="form" onSubmit={handleSubmission}>
              <div className="input-group">
                <label htmlFor="email" className="label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password" className="label">Password</label>
                <input
                  id="password"
                  name="pass"
                  type="password"
                  placeholder="Enter your password"
                  className="input"
                  onChange={handleChange}
                  required
                />
              </div>
              {errorMsg && <p className="error">{errorMsg}</p>}
              <button type="submit" className="login-button" disabled={submitButtonDisabled}>
                {submitButtonDisabled ? "Loading..." : "Login"}
              </button>
            </form>
            <div className="footer-links">
              <a href="/" className="back-home">Back to Home</a>
              <p className="sign-up-text">
                Don't have an account?{" "}
                <a href="/signup" className="sign-up-link">Sign up</a>
              </p>
            </div>
          </div>
          <div className="info-section">
            <motion.div
              className="info-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "seeker" ? (
                <div className="info-item">
                  <Mail className="info-icon" />
                  <h3 className="info-title">Find Your Dream Job</h3>
                  <p className="info-text">
                    Access thousands of job listings tailored to your skills and experience.
                  </p>
                </div>
              ) : (
                <div className="info-item">
                  <Lock className="info-icon provider-icon" />
                  <h3 className="info-title">Hire Top Talent</h3>
                  <p className="info-text">
                    Post job openings and connect with qualified candidates in your industry.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
