import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react'
const Project = () => {
const [currentIndex, setCurrentIndex] = useState(0)
const [cardsToShow, setCardsToShow] = useState(1)
useEffect(()=>{
const updateCardToShow = () =>{
  if(window.innerWidth > 1024){
    setCardsToShow(projectsData.length)
  } else {
    setCardsToShow(1)
  }
}
updateCardToShow()
window.addEventListener('resize', updateCardToShow)
return () => window.removeEventListener('resize',updateCardToShow)
},[])
const nextProject = () => {
  setCurrentIndex((prevIndex => (prevIndex +1)% projectsData.length))
}
const prevProject = () => {
  setCurrentIndex((prevIndex => prevIndex === 0 ? prevProject.length - 1 : prevIndex - 1))
}
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
    id='Projects'>
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className='underline underline-offset-4 decoration-1 under font-light'>completed</span></h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto"> Crafting spaces, Building legacies-explore out Portfolio</p>

        {/* slider button */}
        <div className='flex justify-end items-center mb-8'>
          <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previouos project'>
            <img src={assets.left_arrow} alt="previous" />
          </button>
          <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='next project'>
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>

        {/* project slider container */}
        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
            {projectsData.map((item, index) =>
             <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 '>
<img src={item.image} alt="" className='w-full h-auto mb-14'/>
<div className='absolute left-0 right-0 bottom-5 flex justify-center'>
  <div className='inline-block bg-white w-3/4 px-4  py-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>{item.title}</h2>
<p className='text-gray-500 text-sm'>
  {item.price} <span>|</span> {item.location}
</p>
  </div>

</div>
             </div>
            )}
          </div>
        </div>
    </motion.div>
  )
}

export default Project