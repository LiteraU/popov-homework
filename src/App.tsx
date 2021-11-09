import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function slip (ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        },ms)
    })
}

  Promise.all([slip(2000), slip(5000)])
    .then(() => {
      console.log('all Promises')
  })

  Promise.race([slip(2000), slip(5000)])
    .then(() => {
        console.log('race Promises')
    })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
