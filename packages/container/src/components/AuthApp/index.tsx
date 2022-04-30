import React from 'react'
import { mount } from 'auth/AuthApp'
import { useMicrofrontend } from '../../hooks/useMicrofrontend'

const AuthApp = () => {
  const { mfElement } = useMicrofrontend(mount)
  return <div ref={mfElement} />
}

export default AuthApp
