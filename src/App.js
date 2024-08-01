import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Password') {
      setLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Password is password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    setMessage('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome!</h1>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {message && <p>{message}</p>}
        </form>
      )}
    </div>
  );
};

export default App;
