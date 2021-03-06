import logo from './logo.svg';
import './App.css';

import UsersContainer from './components/UsersContainer.js';
import SchedulesContainer from './components/SchedulesContainer.js';
import ActiveUsersContainer from './components/ActiveUsersContainer.js';
import SchedDetailsContainer from './components/SchedDetailsContainer.js';
import DropDownButton from './components/DropDownButton.js';

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

            <DropDownButton />

            <UsersContainer />
            <ActiveUsersContainer />
            <SchedulesContainer />
            <SchedDetailsContainer />

            {/* componentDidMount() {
              fetch('http://localhost:3000/users', {
                method: 'GET'
              })
              .then(response => response.json())
              .then(usersData => console.log(usersData))
            } */}


        </div>

    </div>
  );
}

export default App;
