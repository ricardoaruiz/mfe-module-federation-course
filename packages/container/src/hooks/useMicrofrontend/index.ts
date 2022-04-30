/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom'
import { BrowserHistory } from 'history'
import { MountFunction, OnNavigateParams, UseMicrofrontend } from './types'

export const useMicrofrontend = (mount: MountFunction): UseMicrofrontend => {
  const history = React.useContext(UNSAFE_NavigationContext)
    .navigator as BrowserHistory

  const navigation = useNavigate()
  const mfElement = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { onParentNavigation } = mount(mfElement.current!, {
      mountPath: history.location.pathname,
      onNavigate: ({
        location: { pathname: nextPathname },
      }: OnNavigateParams) => {
        navigation(nextPathname)
      },
    })

    history.listen(onParentNavigation)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { mfElement }
}
