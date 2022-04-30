declare module 'auth/AuthApp' {
  export function mount(
    el: Element,
    options: {
      mountPath?: string
      onNavigate?: Listener
      defaultHistory?: BrowserHistory
    }
  ): {
    onParentNavigation: Listener
  }
}

declare module 'marketing/MarketingApp' {
  export function mount(
    el: Element,
    options: {
      mountPath?: string
      onNavigate?: Listener
      defaultHistory?: BrowserHistory
    }
  ): {
    onParentNavigation: Listener
  }
}
