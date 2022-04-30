import React from 'react'
import { mount } from 'marketing/MarketingApp'
import { useMicrofrontend } from '../../hooks/useMicrofrontend'

const MarketingApp = () => {
  const { mfElement } = useMicrofrontend(mount)
  return <div ref={mfElement} />
}

export default MarketingApp
