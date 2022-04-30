import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'

import { BrowserHistory, MemoryHistory } from 'history'

import { Home, Price } from './pages'

type AppProps = {
  history: BrowserHistory | MemoryHistory
}

const App: React.FC<AppProps> = ({ history }) => {
  const [routerState, setRouterState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => {
    const unlistenHistory = history.listen(setRouterState)
    return () => unlistenHistory()
  }, [history])

  React.useEffect(() => () => console.log('desmontand...'), [])

  return (
    <Router
      location={routerState.location}
      navigationType={routerState.action}
      navigator={history}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </Router>
  )
}

export default App
