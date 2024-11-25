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
  const [userRole, setUserRole] = useState(''); 
  const auth = getAuth();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName || user.email); 

        
        const role = localStorage.getItem("userRole");
        setUserRole(role); 

        
        console.log("User Role after login:", role);
      } else {
        setName(null); 
        setUserRole('');
      }
    });

    
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userRole"); 
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