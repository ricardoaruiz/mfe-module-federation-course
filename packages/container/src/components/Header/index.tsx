import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HeaderProps } from './types'

import * as S from './styles'

export const Header = ({ isSignedIn, onSignOut }: HeaderProps) => {
  const navigate = useNavigate()

  const handleButtonClick = React.useCallback(() => {
    if (isSignedIn) {
      onSignOut()
      navigate('/')
      return
    }
    navigate('auth/signin')
  }, [isSignedIn, navigate, onSignOut])

  return (
    <S.Wrapper>
      <S.SystemName role="presentation" aria-label="MFes - Module Federation">
        MFes - Module Federation
      </S.SystemName>
      <Link to="/">Home</Link>

      <S.Actions>
        <S.LoginButton type="button" onClick={handleButtonClick}>
          {isSignedIn ? 'Logout' : 'Login'}
        </S.LoginButton>
      </S.Actions>
    </S.Wrapper>
  )
}
