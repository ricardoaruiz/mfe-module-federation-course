import { Listener, BrowserHistory } from 'history'

export type MountFunctionOptions = {
  mountPath?: string
  onNavigate?: Listener
  defaultHistory?: BrowserHistory
}

export type OnParentNavigationParams = {
  pathname: string
}

type OnParentNavigationFunction = (params: OnParentNavigationParams) => void

export type MountNavigationFunction = {
  onParentNavigation: OnParentNavigationFunction
}
