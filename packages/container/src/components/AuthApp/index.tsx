import React from 'react'
import { useNavigate } from 'react-router-dom'
import { mount } from 'auth/AuthApp'
import { useMicrofrontend } from '../../hooks/useMicrofrontend'
import { AuthAppProps } from './types'

const AuthApp = ({ onSignIn }: AuthAppProps) => {
  const navigator = useNavigate()

  const handleSignIn = React.useCallback(() => {
    onSignIn()
    navigator('/')
  }, [navigator, onSignIn])

  const { mfElement } = useMicrofrontend(mount, handleSignIn)
  return <div ref={mfElement} />
}

export default AuthApp
