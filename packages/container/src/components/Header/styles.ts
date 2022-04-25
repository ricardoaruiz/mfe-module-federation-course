import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 70px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 5px 20px;
  background-color: #6557e0;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SystemName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 20px;
`

export const Actions = styled.div`
  flex: 1;
  align-self: stretch;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const LoginButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;

  &:hover {
    border: 1px solid #fff;
  }
  &:focus {
    border: 1px solid #fff;
  }
  &:active {
    background-color: #4c3cdd;
  }
`
