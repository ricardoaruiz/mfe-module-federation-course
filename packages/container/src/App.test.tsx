/* eslint-disable react/display-name */
/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

jest.mock('./components/MarketingApp', () => () => {
  const MarketingApp = () => <div>Mocked MarketingApp</div>
  return <MarketingApp />
})

describe('App', () => {
  it('should render correctly', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
