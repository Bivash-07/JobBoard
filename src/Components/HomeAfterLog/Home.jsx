// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import Main from "../Main/Main";

// function Home() {
//   const [name, setName] = useState(null);
//   const auth = getAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Listen for changes in authentication state
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // If the user is logged in, set their name or email
//         setName(user.displayName || user.email);
//       } else {
//         // If the user is signed out, clear the name
//         setName(null);
//       }
//     });

//     // Cleanup the listener when the component unmounts
//     return () => unsubscribe();
//   }, [auth]);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful, redirect to home
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error signing out:", error);
//       });
//   };

//   return (
//     <div>
//       <div>
//         {/* Show Login and Signup links only if user is not logged in */}
//         {!name && (
//           <>
//             <h1>
//               <Link to="/login">Login</Link>
//             </h1>
//             <br />
//             <h1>
//               <Link to="/signup">Signup</Link>
//             </h1>
//             <br />
//           </>
//         )}

//         {/* Show SignOut button and welcome message only if user is logged in */}
//         {name && (
//           <>
//             <h1>
//               <button onClick={handleSignOut}>SignOut</button>
//             </h1>
//             <br />
//             <h2>Welcome - {name}</h2>
//             <div>
//         <Main />
//       </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;






import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavAfterLog from "../NavAfterLog/NavAfterLog";
import HomeBeforelogin from "../HomeBeforeLog/HomeBeforeLogin";
import Main from "../Main/Main";
import "./Home.css";

function Home() {
  const [name, setName] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, set their name or email
        setName(user.displayName || user.email);
      } else {
        // If the user is signed out, clear the name
        setName(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, redirect or update state
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div>
      {/* Only show NavAfterLog if user is logged in */}
      {name && <NavAfterLog isLoggedIn={!!name} onSignOut={handleSignOut} />}

      <div className="welcome">
        {/* Show welcome message or login/signup options */}
        {name ? (
          <>
            <p className="welcome-message">Welcome - {name}</p>
            <Main /> {/* Only show Main if logged in */}
          </>
        ) : (
          <HomeBeforelogin />
        )}
      </div>
    </div>

  );
}

export default Home;
