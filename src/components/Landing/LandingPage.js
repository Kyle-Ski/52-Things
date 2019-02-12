import React from 'react'
import LogIn from '../SignIn/LogIn'
import Container from '../Tools/Container'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const LandingPage = () =>(
    <Container>
        <LogIn />
        <Link to={ROUTES.PASSWORD_FORGET}><h3>Forgot Password?</h3></Link>
    </Container>
)

export default LandingPage