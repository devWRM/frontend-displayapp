import logo from './logo.svg';
import './App.css';

import UsersContainer from './components/UsersContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cleaning Schedule
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOOGLE
        </a>
      </header>

        <div className="Main-container">

            Cleaning Schedule DATA

            <UsersContainer />

        </div>

    </div>
  );
}

export default App;
