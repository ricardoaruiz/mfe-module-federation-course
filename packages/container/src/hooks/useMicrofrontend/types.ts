import { Listener, BrowserHistory } from 'history'

export type UseMicrofrontend = {
  mfElement: React.MutableRefObject<HTMLDivElement | null>
}

type MountFunctionOptions = {
  mountPath?: string
  onNavigate?: Listener
  defaultHistory?: BrowserHistory
  onSignIn?: () => void
}

export type OnNavigateParams = {
  location: {
    pathname: string
  }
}

export type OnParentNavigationParams = {
  pathname: string
}

type MountFunctionReturn = {
  onParentNavigation: (params: OnParentNavigationParams) => void
}

export type MountFunction = (
  el: Element,
  options: MountFunctionOptions
) => MountFunctionReturn
