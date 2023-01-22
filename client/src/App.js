import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Find a Cook</h1>

      <div className="form">
        <label>Username</label>
        <input type="text" name="Username" />
        <label>Password</label>
        <input type="password" name="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
