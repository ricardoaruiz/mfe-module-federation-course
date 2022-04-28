import React from 'react'
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { BrowserHistory, MemoryHistory } from 'history'
import { SigninPage, SignupPage } from 'pages'

type AppProps = {
  history: BrowserHistory | MemoryHistory
}

const App: React.FC<AppProps> = ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/auth/signin" element={<SigninPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App
