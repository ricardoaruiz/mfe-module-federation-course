import React from 'react'
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { BrowserHistory, MemoryHistory } from 'history'

import { Home, Price } from './pages'

type AppProps = {
  history: BrowserHistory | MemoryHistory
}

const App: React.FC<AppProps> = ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App
