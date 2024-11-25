import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config"; 
import NavBeforeLog from "../NavBeforeLog/NavBeforeLog";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    role: "Job Seeker" 
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        
        await updateProfile(user, { displayName: values.name });

        
        const collectionName = values.role === "Job Seeker" ? "JobSeekers" : "JobProviders";
        await setDoc(doc(db, collectionName, user.uid), {
          name: values.name,
          email: values.email,
          pass: values.pass,
          role: values.role
        });

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className="Navbar">
        <NavBeforeLog />
      </div>

      <div className="signup-page">
        <div className="signup-form-container">
          <div className="signup-form">
            <h1>Welcome</h1>
            <p>Please register to your account</p>

            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setValues({ ...values, pass: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={values.role}
                onChange={(e) => setValues({ ...values, role: e.target.value })}
                className="role-select"
              >
                <option value="Job Seeker">Job Seeker</option>
                <option value="Job Provider">Job Provider</option>
              </select>
            </div>


            <div className="signup-footer">
              {errorMsg && <p className="error">{errorMsg}</p>}
              <button
                className="signup-button"
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                {submitButtonDisabled ? "Signing up..." : "Signup"}
              </button>
              <Link to="/" className="back-home">Back to Home</Link>
              <p className="sign-up-text">
                Have an account? <Link to="/login" className="sign-up-link">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
