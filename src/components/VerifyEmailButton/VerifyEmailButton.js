import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../../firebase';

import 'firebase/auth';

const VerifyEmailButton = () => {
  const [user, setUser] = useState(null);
console.log("Hello");
  useEffect(() => {
    // Listen to the user's authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe(); // Cleanup the listener when the component unmounts
    };
  }, []);

  const handleSendVerificationEmail = async () => {
    if (user) {
      try {
        await user.sendEmailVerification();
        console.log('Verification email sent successfully.');
      } catch (error) {
        console.error('Error sending verification email:', error.message);
      }
    }
  };

  if (user && !user.emailVerified) {
    return (
      <div>
        <p>Your email address is not verified. Click the button below to send a verification email.</p>
        <button onClick={handleSendVerificationEmail}>Send Verification Email</button>
      </div>
    );
  }

  return <p>Your email is already verified.</p>;
};

export default VerifyEmailButton;
