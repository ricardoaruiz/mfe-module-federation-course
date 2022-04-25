import React from 'react'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.SystemName role="presentation" aria-label="MFes - Module Federation">
        MFes - Module Federation
      </S.SystemName>

      <S.Actions>
        <S.LoginButton type="button">Login</S.LoginButton>
      </S.Actions>
    </S.Wrapper>
  )
}
