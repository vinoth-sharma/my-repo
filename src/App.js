import React from 'react';
import "./App.scss";
import LeftSection from './containers/left-section/leftSection';

function App() {
  return (
    <div className="App" style={{ backgroundImage : `url("bg/wood.jpg")`}}>
        <LeftSection />
    </div>
  );
}

export default App;
