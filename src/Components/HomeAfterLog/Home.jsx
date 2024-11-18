import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavAfterLog from "../NavAfterLog/NavAfterLog";
import HomeBeforelogin from "../HomeBeforeLog/HomeBeforeLogin";
import Main from "../Main/Main";
import "./Home.css";

import JobCategories from "./JobCategories";
import Footer from "../HomeBeforeLog/Footer";
import LatestJobs from "./LatestJobs";
import HomeJobProvider from "./HomeJobProvider";

function Home() {
  const [name, setName] = useState(null);
  const [userRole, setUserRole] = useState(''); // "Job Seeker" or "Job Provider"
  const auth = getAuth();

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName || user.email); // If the user is logged in, set their name or email

        // Retrieve the user role from your data source
        // For example, if using local storage:
        const role = localStorage.getItem("userRole");
        setUserRole(role); // Set the retrieved role

        // Log the user role to verify it's being set correctly
        console.log("User Role after login:", role);
      } else {
        setName(null); // If the user is signed out, clear the name
        setUserRole('');
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userRole"); // Clear user role on sign-out and Sign-out successful, redirect or update state
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div>
      {/* Only show NavAfterLog if user is logged in also it won't add extra navbar to HomebeforeLogin */}
      {name && <NavAfterLog isLoggedIn={!!name} onSignOut={handleSignOut} />}

      <div className="welcome">
        {/* Show welcome message or login/signup options */}
        {name ? (
          userRole === 'Job Seeker' ? (
            <>
              <p id="Home" className="welcome-message">Welcome - {name}</p>
              <div id="Jobs"><Main /><LatestJobs /></div>
              <div id="Categories"><JobCategories /></div>
              <div id="Contact-Us"><Footer /></div>
            </>
          ) : (
            <>
            <div className="HomeJobProvider"><HomeJobProvider /></div>
            <div id="Contact-Us"><Footer /></div>
            </>
          )
        ) : (
          <HomeBeforelogin />
        )}
      </div>
    </div>
  );
}

export default Home;