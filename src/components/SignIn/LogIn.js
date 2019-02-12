import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const LogIn = (props) => (
    <div className='login'>
        <input name='email' className='input' type='text' placeholder='Email Address'/>
        <input name='pass' className='input' type='password' placeholder='Password'/>
        <button className='login button' onClick={()=>console.log('login')}>Log In</button>
        <h3>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></h3>
    </div>
)

export default LogIn