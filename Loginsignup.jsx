import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import './Loginsignup.css';
import coffeeVideo from '../components/assets/coffeebrewing.mp4';

const Loginsignup = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert('Login successful!');
    } catch (err) {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop className="bg-video">
        <source src={coffeeVideo} type="video/mp4" />
      </video>

      <div className="login-card">
        <h2>Welcome back</h2>
        <p>Please enter your detail to sign in.</p>

        <button className="google-btn">Sign in with Google</button>

        <div className="divider">OR</div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-Mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" />Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>

        <p className="signup-link">Don’t have an account yet? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Loginsignup;
