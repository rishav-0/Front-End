import './App.css'
import Button from './Components/Button'
import Help from './Components/Help'
import Nav from './Components/Nav'
import Profile from './Components/Profile'
import Social from './Components/Social'
import Tab from './Components/Tab'


function App() {

  return (
    <>
      <div className="w-[412px] bg-[#e5ecfb]">
        <div className=" border p-6 bg-[]">
          <Nav />
          
        </div>
        
          <Profile dp='https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg' usrName='Micheal Johnson'
          rate='149$'  students='1524' post='Product Design / Branding' />
          <div className="bg-white p-6">
            <Social /> 
          <div className="flex justify-between bg-slate-100 rounded-lg mb-3">
            <Tab title='About Me' />
            <Tab title='Contact' />
            <Tab title='Reviews' />
            </div>       
        <p className="text-sm mb-6 leading-6 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ad consequuntur placeat fugit. Quam ipsum et blanditiis similique tempora maiores.</p>
        <p className="text-xl mb-4">I can help with </p>
        <Help title='Career roadmap and advice' />
        <Help title='Portfolio Review' />
        <Button title='Book Mentoring'/>
          </div>
          
        
      </div>
    </>
  )
}

export default App
