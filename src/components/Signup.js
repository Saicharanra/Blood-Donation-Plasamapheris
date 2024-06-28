import React, { useState } from 'react';
import Style from './Style.css'
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true); // State to manage whether to show sign in or sign up

  const handleSignIn = async (e) => {
    e.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      console.log("Login successfully");
      alert("Logged in successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); 
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created");
      alert("Account created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn); // Toggle the state between sign in and sign up
  };

  return (
    <div className='signup-container'>
      {isSignIn ? ( // Render sign in form if isSignIn is true
        <form className='signup-form' onSubmit={handleSignIn}>
          <h2>Login</h2>
          <label htmlFor='email'>Email:</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor='password'> 
            Password:
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type='submit'>Login</button>
          <p>Don't have an account? <button onClick={toggleForm}>Sign up</button></p>
        </form>
      ) : ( 
        <form className='signup-form' onSubmit={handleSignUp}> 
          <h2>Sign up</h2>
          <label htmlFor='email'>Email:</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor='password'> 
            Password:
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type='submit'>Sign up</button>
          <p>Already have an account? <button onClick={toggleForm}>Sign in</button></p>
        </form>
      )}
    </div>
  );
};

export default Sign;
