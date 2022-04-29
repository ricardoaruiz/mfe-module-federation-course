import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.SystemName role="presentation" aria-label="MFes - Module Federation">
        MFes - Module Federation
      </S.SystemName>
      <Link to="/">Home</Link>

      <S.Actions>
        <S.LoginButton type="button" onClick={() => navigate('auth/signin')}>
          Login
        </S.LoginButton>
      </S.Actions>
    </S.Wrapper>
  )
}
