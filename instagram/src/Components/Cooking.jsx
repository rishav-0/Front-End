import React from 'react'

const Cooking = () => {
  return (
    <div className='rounded-full overflow-hidden w-[100px] min-w-[100px] flex items-center relative h-[100px] '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GqE0HovuSH2RF5dx8jrDbRM7mVG1BEKf9Q&s" alt="" />
        <div className="absolute bottom-0 flex justify-center p-3 w-full">
          <p className=" text-white bottom-0 text-center" >Cooking</p>
        </div>
    </div>

  )
}

export default Cooking