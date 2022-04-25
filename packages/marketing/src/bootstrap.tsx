import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const mount = (el: Element) => {
  const root = createRoot(el)
  root.render(<App />)
}

const standAloneElement = document.querySelector('#dev-container-marketing')
const isStandAloneMode =
  standAloneElement && process.env.NODE_ENV === 'development'

if (isStandAloneMode) {
  mount(standAloneElement)
}

export { mount }
