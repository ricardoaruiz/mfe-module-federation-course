import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '.'

describe('Header', () => {
  it('should be render successfuly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('presentation', { name: /mfes - module federation/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
})
