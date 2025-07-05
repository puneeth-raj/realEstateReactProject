// import React from 'react'

import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Project from "./components/Project"
import Testimonials from "./components/Testimonials"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App