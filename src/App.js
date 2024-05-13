import React from 'react';
import RightSide from './components/rightSide';
import LeftSide from './components/leftSide';
import './App.css'

function App() {
  return <div className='main'>
    <LeftSide />
    <RightSide />
  </div>;
};

export default App;
