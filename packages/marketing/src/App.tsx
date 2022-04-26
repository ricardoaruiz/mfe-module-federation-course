import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Price } from 'pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
