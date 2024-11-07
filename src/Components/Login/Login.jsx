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
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase.config"; // Ensure `db` is correctly initialized as your Firestore instance
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavBeforeLog from "../NavBeforeLog/NavBeforeLog";

export default function Component() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Job Seeker"); // Default tab is "Job Seeker"
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
      // Step 1: Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.pass);
      const userId = userCredential.user.uid;

      // Step 2: Check user's role in Firestore
      // Adjust path to fetch from either "JobSeekers" or "JobProviders"
      const collectionName = activeTab === "Job Seeker" ? "JobSeekers" : "JobProviders";
      const userDocRef = doc(db, collectionName, userId); 
      const userDoc = await getDoc(userDocRef);

      console.log("userDoc: ", userDoc.data());

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Check if the user's role matches the selected role
        if (userData.role !== activeTab) {
          console.log("userData.role: ", userData.role);
          console.log("activeTab: ", activeTab);
          setErrorMsg("Enter correct job role.");
          setSubmitButtonDisabled(false);
          return;
        }

        // If role matches, navigate to the home page
        navigate("/");
      } else {
        setErrorMsg("Enter correct job role.");
      }
    } catch (error) {
      // Handle errors from authentication
          setErrorMsg("Login failed. Please try again.");
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
                  className={`tab-button ${activeTab === "Job Seeker" ? "active" : ""}`}
                  onClick={() => setActiveTab("Job Seeker")}
                >
                  Job Seeker
                </button>
                <button
                  className={`tab-button ${activeTab === "Job Provider" ? "active" : ""}`}
                  onClick={() => setActiveTab("Job Provider")}
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
                {activeTab === "Job Seeker" ? (
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
