import { Listener, BrowserHistory } from 'history'

export type UseMicrofrontend = {
  mfElement: React.MutableRefObject<HTMLDivElement | null>
}

type MountFunctionOptions = {
  mountPath?: string
  onNavigate?: Listener
  defaultHistory?: BrowserHistory
}

type MountFunctionReturn = {
  onParentNavigation: Listener
}

export type MountFunction = (
  el: Element,
  options: MountFunctionOptions
) => MountFunctionReturn

export type OnNavigateParams = {
  location: {
    pathname: string
  }
}
