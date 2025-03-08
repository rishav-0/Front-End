import React from 'react'
import Tab from '../../Components/Tab'

const Nav = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Tab title='News Feed'  icon='fa-solid fa-compass' />
        <Tab title='Messages' notification='2' icon='fas fa-envelope' />
        <Tab title='Forums'  icon='fa-solid fa-comments' />
        <Tab title='Friends' notification='6' icon='fa-solid fa-user-group' />
        <Tab title='Media'  icon='fa-solid fa-image' />
        <Tab title='Settings'  icon='fa-solid fa-gear' />
    </div>
  )
}

export default Nav