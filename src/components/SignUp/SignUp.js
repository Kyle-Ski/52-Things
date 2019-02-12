import React from 'react'
import Container from '../Tools/Container'
const SignUp = (props) => (
    <Container>
        <div className='signup'>
            <input name='firstName' className='input' type='text' placeholder='First Name'/>
            <input name='lastName' className='input' type='text' placeholder='Last Name'/>
            <input name='email' className='input' type='text' placeholder='Email Address'/>
            <input name='pass' className='input' type='password' placeholder='Password'/>
            <button className='login button' onClick={()=>console.log('signup')}>Sign Up</button>
        </div>
    </Container>
)

export default SignUp