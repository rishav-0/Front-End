import React from 'react'
import Logo from '../../Components/Logo'
import ProfileCard from '../../Components/ProfileCard'
import Badge from '../../Components/Badge'
import Community from '../../Components/Community'
import People from '../../Components/People'
import Tell from '../../Components/Tell'
import Post from '../../Components/Post'
import post from '../../images/post.png'
import Activity from './Activity'

const Home = () => {
  return (
    <div className='bg-[#1a1a1a] h-full flex gap-2 sm:flex-wrap p-4'>
        <div className="min-w-[357px] w-[357px]  rounded-2xl bg-[#1a1a1a]">
            <ProfileCard photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBWP-9EjpszdnPWI6TM-n7Fmr_9ZOkXhB8A&s' usrName='Bruce wyane' usrId='@brucewyane' caption='I am Batman' followers='1.1M' following='0'/>
            <br />
            <p className='text-white my-4'>Skills</p>
            <div className="flex gap-2 flex-wrap">
                <Badge title='UX designer' />
                <Badge title='UI desgner' />
                <Badge title='Js code' />
                <Badge title='Full stack developer' />
            </div>
            <p className="text-white my-4">Communication</p>
            <div className="">
                <Community img='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7CjtvR3TkD7kFPoWBh41pJ1oe0isd0EFVITtFl9MMi5AQVgt0JifB7wVfIV3I_g94FZZvFjtJk7piZIjQrpe6hwnq3Q9J16tnYuxwPiSAKRVEjxfizIFR243n2xZPDV-qe3z0NMitOmtPCSFqH8vWAeJfyCd0jtWn3euixkTuYYPVGMlTpBcbxd8ow/s3000/16923191_5741154.jpg' count='32' post='Ux Designer community' />
                <Community img='https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg' count='12' post='Front end developers' />
                <Community img='https://cdn-icons-png.flaticon.com/512/10329/10329496.png' count='12' post='Front end developers' />
            </div>
        </div>
        <div className="flex-grow-0  rounded-2xl md:flex-grow">
            <div className="flex gap-4  no-scrollbar overflow-auto mb-6">
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
                <People img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s' />
            </div>
            <Tell />
            <Post profile='' usrId='george' bluetick='true' usrName='George Jose' time='1 hour ago' caption='Hello how are you'
            photo={post}  />
        </div>
        <div className="min-w-[355px] rounded-2xl bg-[#282828] p-4   w-[355px]">
            <Activity photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8d4F3Lf3kbFIFSGu6BSqqThC9vsueKd7a_w&s" tick='true' usrName='Christiano' 
            time='4 min ago'/>
            <Activity photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8d4F3Lf3kbFIFSGu6BSqqThC9vsueKd7a_w&s" tick='true' usrName='Christiano' 
            time='4 min ago'/>
            <Activity photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8d4F3Lf3kbFIFSGu6BSqqThC9vsueKd7a_w&s" tick='true' usrName='Christiano' 
            time='4 min ago'/>
        </div>
    </div>
  )
}

export default Home