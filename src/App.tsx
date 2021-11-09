import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function sum(a: number, b: number) {
    return a + b;
  }

  function minus(a: number, b: number) {
    return a - b;
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  let sumHandler = {
    apply: function(target: (arg0: number, arg1: number) => number, thisArg: any, argumentsList: number[]) {
      console.log(`Calculate sum: ${argumentsList}`);
      return argumentsList[0] + argumentsList[1];
    }
  };

  let minusHandler = {
    apply: function(target: (arg0: number, arg1: number) => number, thisArg: any, argumentsList: number[]) {
      console.log(`Calculate minus: ${argumentsList}`);
      return argumentsList[0] - argumentsList[1];
    }
  };

  let multiplyHandler = {
    apply: function(target: (arg0: number, arg1: number) => number, thisArg: any, argumentsList: number[]) {
      console.log(`Calculate multiply: ${argumentsList}`);
      return argumentsList[0] * argumentsList[1];
    }
  };

  let proxySum = new Proxy(sum, sumHandler);
  let prosyMinus = new Proxy(minus, minusHandler)
  let proxyMultiply = new Proxy(multiply, multiplyHandler)

  console.log(proxySum(1, 2));
  console.log(prosyMinus(4, 2));
  console.log(proxyMultiply(4, 2));

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
