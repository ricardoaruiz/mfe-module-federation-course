import React from 'react'

import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Container works fine!! Now with React and Typescript</h1>
      <h2>Deployed by GithubActions on AWS S3 and Cloudfront</h2>
    </>
  )
}

export default App
