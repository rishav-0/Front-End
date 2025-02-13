import { useState } from 'react'
import './App.css'
import ProfileCard from './components/card/ProfileCard'
import Button from './components/button/Button'
import TermsCard from './components/card/TermsCard'
import Trend from './components/card/Trend'
import Turnon from './components/card/Turnon'
import Chats from './components/card/Chats'
import Event from './components/card/Event'
import Home from './pages/Home'
import Sidebar from './pages/sidebar/Sidebar'


function App() {
  // const [count, setCount] = useState(0)
  const [sidebar,setBar] = useState(true)
  const showHide = ()=>{
    setBar(sidebar == true?false:true)
  }

  return (
    // <>
    // <Home />
    //   <ProfileCard img='https://img-resizer.proko.com/w/1200/media/images/stan/detailed-portrait-course-drawing-1.jpg' name='Rishav Talukdar' work='Ui Developer' friends='740' projects='3' reviews='14' />
    //   <TermsCard  month='September' desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim <strong className='text-black'>doloribus repudiandae corrupti</strong> laborum harum quibusdam ullam maxime cum eligendi.`}/>
    //   <Trend desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, qui? Architecto perspiciatis, pariatur corporis a repellendus dolorem vel at. Accusamus illum sit aut asperiores tenetur expedita, voluptate tempora porro deleniti' title='Trendy cloting' />
    //   <Turnon title='These documents refer to the leatest version of vuseaxx (4.0+), to see the documents of the previous versions you can do it' />
    //   <div className="overflow-y-auto w-[400px] rounded-xl h-[300px] mb-3">
    //     <Chats img='https://i.pinimg.com/550x/84/8d/cb/848dcb4d34565039f6a3d90a4486d685.jpg' name='Rishav talukdar' text='Hey whatsupp!!' textcount='27' time='1:44' ntfcn='5'/>
    //     <Chats img='https://i.pinimg.com/550x/84/8d/cb/848dcb4d34565039f6a3d90a4486d685.jpg' name='Rishav talukdar' text='Hey whatsupp!!' textcount='27' time='1:44'/>
    //     <Chats img='https://i.pinimg.com/550x/84/8d/cb/848dcb4d34565039f6a3d90a4486d685.jpg' name='Rishav talukdar' text='Hey whatsupp!!' textcount='27' time='1:44'/>
    //     <Chats img='https://i.pinimg.com/550x/84/8d/cb/848dcb4d34565039f6a3d90a4486d685.jpg' name='Rishav talukdar' text='Hey whatsupp!!' textcount='27' time='1:44'/>
    //     <Chats img='https://i.pinimg.com/550x/84/8d/cb/848dcb4d34565039f6a3d90a4486d685.jpg' name='Rishav talukdar' text='Hey whatsupp!!' textcount='27' time='1:44'/>

    //   </div>
    //   <Event  />
    // </>
    <>
      <div className="flex">
        <Sidebar sidebar={sidebar} />
        <div className="p-3">
          <i className={`fas cursor-pointer ${sidebar == true?'fa-angle-left':'fa-angle-right '}`} onClick={showHide}></i>
        </div>
      </div>
    </>
  )
}

export default App
