import React from 'react'
import { createRoot } from 'react-dom/client'
import { createMemoryHistory, createBrowserHistory } from 'history'

import {
  MountFunctionOptions,
  MountNavigationFunction,
  OnParentNavigationParams,
} from 'types/bootstrap.types'

import App from './App'

const mount = (
  el: Element,
  { defaultHistory, onNavigate, mountPath }: MountFunctionOptions
): MountNavigationFunction => {
  const history = defaultHistory || createMemoryHistory()

  onNavigate && history.listen(onNavigate)
  mountPath && history.push(mountPath)

  const root = createRoot(el)
  root.render(<App history={history} />)

  return {
    onParentNavigation: ({
      pathname: nextPathname,
    }: OnParentNavigationParams) => {
      const currentPathname = history.location.pathname
      currentPathname !== nextPathname && history.push(nextPathname)
    },
  }
}

const standAloneElement = document.querySelector('#dev-container-marketing')
const isStandAloneMode =
  standAloneElement && process.env.NODE_ENV === 'development'

if (isStandAloneMode) {
  mount(standAloneElement, {
    defaultHistory: createBrowserHistory(),
  })
}

export { mount }
