import React from 'react'

const LogIn = (props) => (
    <div className='login'>
        <input className='input' type='text' placeholder='Email Address'/>
        <input className='input' type='password' placeholder='Password'/>
        <button className='login button' onClick={()=>console.log('login')}>Log In</button>
        <a href=''><h3>Forgot Password?</h3></a>
    </div>
)

export default LogIn