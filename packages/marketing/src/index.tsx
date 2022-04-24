/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.querySelector('#dev-container-marketing')
const root = createRoot(container!)
root.render(<App />)