import React from 'react'
import Container from '../Tools/Container'
const PassForget = (props) => (
    <Container>
    <div className='pass-change'>
        <input name='email' className='input' type='text' placeholder='Email Address' />
        <button className='login button' onClick={() => console.log('login')}>Reset My Password</button>
    </div>
    </Container>
)

export default PassForget