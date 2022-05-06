/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import {
  MountFunction,
  OnNavigateParams,
  OnParentNavigationParams,
  UseMicrofrontend,
} from './types'

export const useMicrofrontend = (
  mount: MountFunction,
  handleSignIn?: () => void
): UseMicrofrontend => {
  const navigation = useNavigate()
  const location = useLocation()
  const onParentNavigationRef =
    React.useRef<(params: OnParentNavigationParams) => void>()

  const mfElement = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { onParentNavigation } = mount(mfElement.current!, {
      mountPath: location.pathname,
      onNavigate: ({
        location: { pathname: nextPathname },
      }: OnNavigateParams) => {
        navigation(nextPathname)
      },
      onSignIn: handleSignIn,
    })

    onParentNavigationRef.current = onParentNavigation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    onParentNavigationRef.current &&
      onParentNavigationRef.current({ pathname: location.pathname })
  }, [location.pathname])

  return { mfElement }
}
