import React from 'react';
import './auth.css'
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  return (
    <div className='auth_container'>
      <div className='auth_child'>
        <Login />
        <Signup />
      </div>
    </div>
  )
}

export default Auth