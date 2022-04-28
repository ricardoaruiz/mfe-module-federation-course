import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  createMemoryHistory,
  createBrowserHistory,
  BrowserHistory,
  Listener,
} from 'history'

import App from './App'

type MountOptions = {
  mountPath?: string
  onNavigate?: Listener
  defaultHistory?: BrowserHistory
}

type OnParentNavigationParams = {
  location: {
    pathname: string
  }
}

const mount = (
  el: Element,
  { defaultHistory, onNavigate, mountPath = '/auth/signin' }: MountOptions
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [mountPath],
    })

  onNavigate && history.listen(onNavigate)

  const root = createRoot(el)
  root.render(<App history={history} />)

  return {
    onParentNavigation: ({
      location: { pathname: nextPathname },
    }: OnParentNavigationParams) => {
      const currentPathname = history.location.pathname
      currentPathname !== nextPathname && history.push(nextPathname)
    },
  }
}

const standAloneElement = document.querySelector('#dev-container-auth')
const isStandAloneMode =
  standAloneElement && process.env.NODE_ENV === 'development'

if (isStandAloneMode) {
  mount(standAloneElement, {
    defaultHistory: createBrowserHistory(),
  })
}

export { mount }
