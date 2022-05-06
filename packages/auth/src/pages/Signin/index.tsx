import React from 'react'
import { Link } from 'react-router-dom'
import { SigninPageProps } from './types'

const SinginPage = ({ onSignIn }: SigninPageProps) => {
  return (
    <>
      <h1>SinginPage</h1>
      <Link to="/auth/signup">Cadastro</Link>

      <div>
        <button type="button" onClick={onSignIn}>
          Do Signin
        </button>
      </div>
    </>
  )
}

export default SinginPage
