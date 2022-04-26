import React from 'react'
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom'
import { BrowserHistory } from 'history'
import { mount } from 'marketing/MarketingApp'

type OnNavigateParams = {
  location: {
    pathname: string
  }
}

const MarketingApp = () => {
  const history = React.useContext(UNSAFE_NavigationContext)
    .navigator as BrowserHistory
  const navigation = useNavigate()
  const marketingAppElementRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { onParentNavigation } = mount(marketingAppElementRef.current, {
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

  return <div id="marketing-app" ref={marketingAppElementRef}></div>
}

export default MarketingApp
