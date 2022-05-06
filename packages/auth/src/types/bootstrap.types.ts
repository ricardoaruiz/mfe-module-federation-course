import { Listener, BrowserHistory } from 'history'

export type MountFunctionOptions = {
  mountPath?: string
  onNavigate?: Listener
  defaultHistory?: BrowserHistory
  onSignIn: () => void
}

export type OnParentNavigationParams = {
  pathname: string
}

type OnParentNavigationFunction = (params: OnParentNavigationParams) => void

export type MountNavigationFunction = {
  onParentNavigation: OnParentNavigationFunction
}
