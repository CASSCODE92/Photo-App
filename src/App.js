import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './bookmarks';
import './home';
import './index';
// import './log_in';
import './nav-bar';
import './photo-app1';
import './photo-app2';
import './photo-app3';
import './profiles';
import './serviceWorker';
import './setupTests';
import './App.test';
import './styles.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
