import React from 'react'
import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const marketingAppElementRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    mount(marketingAppElementRef.current)
  }, [])

  return <div id="marketing-app" ref={marketingAppElementRef}></div>
}

export default MarketingApp
