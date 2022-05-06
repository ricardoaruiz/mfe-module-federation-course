import React from 'react'
import { Link } from 'react-router-dom'
import { SignupPageProps } from './types'

const SignupPage = ({ onSignIn }: SignupPageProps) => {
  return (
    <>
      <h1>SingupPage</h1>
      <Link to="/auth/signin">Login</Link>

      <div>
        <button type="button" onClick={onSignIn}>
          Do Signup
        </button>
      </div>
    </>
  )
}

export default SignupPage
