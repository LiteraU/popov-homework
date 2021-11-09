import React from 'react';
import './App.css';
const HelloPage = React.lazy(() => import('./HelloPage'));

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback='Загрузка...'>
          <HelloPage/>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
