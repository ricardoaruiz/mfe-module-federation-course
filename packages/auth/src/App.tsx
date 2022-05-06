import React from 'react'
import { Router, Routes, Route, Navigate } from 'react-router-dom'
import { BrowserHistory, MemoryHistory } from 'history'

import { SigninPage, SignupPage } from 'pages'

type AppProps = {
  history: BrowserHistory | MemoryHistory
  onSignIn: () => void
}

const App: React.FC<AppProps> = ({ history, onSignIn }) => {
  const [routerState, setRouterState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => {
    const unlistenHistory = history.listen(setRouterState)
    return () => unlistenHistory()
  }, [history])

  return (
    <Router
      location={routerState.location}
      navigationType={routerState.action}
      navigator={history}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/auth/signin" />} />
        <Route path="/auth" element={<Navigate to="/auth/signin" />} />
        <Route
          path="/auth/signin"
          element={<SigninPage onSignIn={onSignIn} />}
        />
        <Route
          path="/auth/signup"
          element={<SignupPage onSignIn={onSignIn} />}
        />
      </Routes>
    </Router>
  )
}

export default App
