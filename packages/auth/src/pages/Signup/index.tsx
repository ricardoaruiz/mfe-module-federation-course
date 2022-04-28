import React from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <>
      <h1>SingupPage</h1>
      <Link to="/auth/signin">Login</Link>
    </>
  )
}

export default SignupPage
