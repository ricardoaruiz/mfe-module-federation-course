import React from 'react'
import { Link } from 'react-router-dom'

const SinginPage = () => {
  return (
    <>
      <h1>SinginPage</h1>
      <Link to="/auth/signup">Cadastro</Link>
    </>
  )
}

export default SinginPage
