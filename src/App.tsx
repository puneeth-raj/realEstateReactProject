// import React from 'react'

import About from "./components/About"
import Header from "./components/Header"
import Project from "./components/Project"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      
      <Header/>
      <About/>
      <Project/>
    </div>
  )
}

export default App