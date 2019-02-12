import React from 'react'
import Container from '../Tools/Container'

const PassChange = (props) => (
    <Container>
    <div className='pass-change'>
        <input name='old' className='input' type='text' placeholder='Old Password'/>
        <input name='new' className='input' type='text' placeholder='New Password'/>
        <button className='login button' onClick={()=>console.log('login')}>Update Password</button>
    </div>
    </Container>
)

export default PassChange