import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import MarketingApp from './components/MarketingApp'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <h1>Container works fine!! Now with React and Typescript</h1>
      <h2>Deployed by GithubActions on AWS S3 and Cloudfront</h2>
      <MarketingApp />
    </BrowserRouter>
  )
}

export default App
