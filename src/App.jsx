import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, setPersistence, onAuthStateChanged, browserLocalPersistence } from "firebase/auth";

import Home from "./Components/HomeAfterLog/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import HomeBeforeLogin from "./Components/HomeBeforeLog/HomeBeforeLogin";
import "./App.css";
import JobCategoriesPage from "./Components/HomeAfterLog/JobCategoriesPage";
import Footer from "./Components/HomeBeforeLog/Footer";
import LatestJobsPage from "./Components/HomeAfterLog/LatestJobsPage";
import HomeJobProvider from "./Components/HomeAfterLog/HomeJobProvider";
import PostJob from "./Components/HomeAfterLog/PostJob";

function App() {
  const [userName, setUserName] = useState("");
  const auth = getAuth();

  useEffect(() => {
    
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Set up an auth state listener
        return onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserName(user.displayName || user.email);
          } else {
            setUserName("");
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, [auth]);

  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/home" element={<HomeBeforeLogin />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/LatestJobsPage" element={<LatestJobsPage />} />
          <Route path="/JobCategoriesPage" element={<JobCategoriesPage />} />
          <Route path="/HomeJobProvider" element={<HomeJobProvider />} />
          <Route path="/PostJob" element={<PostJob />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
