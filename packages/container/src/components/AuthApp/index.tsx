import React from 'react'
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom'
import { BrowserHistory } from 'history'
import { mount } from 'auth/AuthApp'

type OnNavigateParams = {
  location: {
    pathname: string
  }
}

const AuthApp = () => {
  const history = React.useContext(UNSAFE_NavigationContext)
    .navigator as BrowserHistory
  const navigation = useNavigate()
  const mfAppElementRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { onParentNavigation } = mount(mfAppElementRef.current, {
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

  return <div id="auth-app" ref={mfAppElementRef}></div>
}

export default AuthApp
