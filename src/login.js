import React from 'react';
import RightSide from './components/rightSide';
import LeftSide from './components/leftSide';
import './login.css'

function Login() {
  return <div className='main'>
    <LeftSide />
    <RightSide />
  </div>;
};

export default Login;
