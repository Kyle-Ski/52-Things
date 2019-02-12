import React from 'react'
import LogIn from '../SignIn/LogIn'
import Container from '../Tools/Container'

const LandingPage = () =>(
    <Container>
        <LogIn />
        <h3>Don't have an account? <a href=''>Sign Up</a></h3>
    </Container>
)

export default LandingPage