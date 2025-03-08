import React from 'react'
import Stories from './Stories'
import Suggestion from './Suggestion'
import Uiux from '../../Components/Uiux'
import Cooking from '../../Components/Cooking'
import Hiking from '../../Components/Hiking'

const Right = () => {
  return (
    <div className='p-4 md:flex flex-wrap  justify-between w-full'>
      <div className="">
        <p className="text-xl font-bold mb-6">Stories</p>
      <div className="overflow-x-auto flex gap-2 no-scrollbar mb-6">
        <Stories image='https://plus.unsplash.com/premium_photo-1676236246841-58ce7f9004a0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww' name='Anil' avatar='https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg' />
        <Stories image='https://plus.unsplash.com/premium_photo-1676236246841-58ce7f9004a0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww' name='Anil' avatar='https://assets.mobileworldlive.com/wp-content/uploads/2015/10/16130048/Dorsey-iamge.png' />
       
      </div>
      </div>
      <div className="">
        <p className="text-xl font-bold mb-6">Suggestions</p>
      <div className="mb-6">
        <Suggestion  usrName='Nick' caption='hello' photo='https://media.istockphoto.com/id/905456806/photo/portrait-of-a-smiling-young-woman.jpg?s=612x612&w=0&k=20&c=Z17ogMm2BB53aXRxOatxWCGzQqpW5RQPNkHGWTUhtMc=' />
        <Suggestion  usrName='Britni' caption='hello guys' photo='https://media.istockphoto.com/id/905456806/photo/portrait-of-a-smiling-young-woman.jpg?s=612x612&w=0&k=20&c=Z17ogMm2BB53aXRxOatxWCGzQqpW5RQPNkHGWTUhtMc=' />
        <Suggestion  usrName='Hanzo' caption='World' photo='https://media.istockphoto.com/id/905456806/photo/portrait-of-a-smiling-young-woman.jpg?s=612x612&w=0&k=20&c=Z17ogMm2BB53aXRxOatxWCGzQqpW5RQPNkHGWTUhtMc=' />
        <p className="text-xs text-slate-400 cursor-pointer">See all</p>
      </div>
      </div>
      <div className="">
        <p className="text-xl font-bold mb-6">Recommendations</p>
      <div className="">
      <div className="flex gap-2 mb-2">
      <Uiux />
      <Cooking />
      </div>
      </div>
      
      <div className="flex  gap-2 mb-2">
      <Uiux />
      <Hiking />
      </div>
      </div>
        
    </div>
  )
}

export default Right