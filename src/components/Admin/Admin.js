import React from 'react'
import PassChange from '../PasswordEdit/PasswordChange'
import PassForget from '../PasswordEdit/PassForget'

const Admin = (props) => (
    <div className='admin'>
        <PassChange />
        <PassForget />
    </div>
)

export default Admin