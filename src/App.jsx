import { useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password123') {
      setMessage('Login successful!');
      setIsLoggedIn(true); // Navigate to LandingPage
    } else {
      setMessage('Invalid email or password.');
    }
  };

  if (isLoggedIn) {
    return <LandingPage />;
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <div className="options">
        <a href="#">Forgot Password?</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

export default App;