import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should be render successfuly', () => {
    render(<Header />)
    expect(
      screen.getByRole('presentation', { name: /mfes - module federation/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
})
