import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

const AuthApp = React.lazy(() => import('./components/AuthApp'))
const MarketingApp = React.lazy(() => import('./components/MarketingApp'))

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false)

  const handleSignIn = React.useCallback(() => {
    setIsSignedIn(true)
  }, [])

  const handleSignOut = React.useCallback(() => {
    setIsSignedIn(false)
  }, [])

  return (
    <BrowserRouter>
      <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/*" element={<MarketingApp />} />
          <Route path="/auth/*" element={<AuthApp onSignIn={handleSignIn} />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
