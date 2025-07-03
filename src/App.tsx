// import React from 'react'

import About from "./components/About"
import Header from "./components/Header"
import Project from "./components/Project"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
    </div>
  )
}

export default App