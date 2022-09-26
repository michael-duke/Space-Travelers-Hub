import React from 'react';
import './App.css';
import MissionContainer from './components/MissionContainer';
import RocketContainer from './components/RocketContainer';

function App() {
  return (
    <div className="App">
      <h1>Space Traveler&apos;s Hub</h1>
      <MissionContainer />
      <RocketContainer />
    </div>
  );
}

export default App;
