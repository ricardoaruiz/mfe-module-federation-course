/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import App from './App'

describe('App', () => {
  it('should render correctly', () => {
    const { container } = render(<App history={createMemoryHistory()} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
