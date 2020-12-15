import React from 'react';
import "./App.scss";
import LeftSection from './containers/left-section/leftSection';
import { MainSection } from './containers/main-section/mainsection';

function App() {
  return (
    <div className="App" style={{ backgroundImage : `url("bg/wood.jpg")`}}>
        <LeftSection />
        <MainSection />
    </div>
  );
}

export default App;
