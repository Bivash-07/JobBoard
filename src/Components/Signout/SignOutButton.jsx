import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Redirect to home page after successful sign out
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
