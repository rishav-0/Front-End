import React from 'react'
import Tabs from './tabs'
import Logo from './Logo'

const Sidebar = () => {
  return (
    <div className="bg-[#22331d] h-full p-2 flex flex-col justify-between">
        <div className="">
            <Logo name='Bazaar' logo='https://www.svgrepo.com/show/217771/shopping-logo.svg'></Logo>
        <div className='flex flex-col gap-1'>
            <Tabs to='/' tabName='Home' logo='fas fa-home'></Tabs>
            <Tabs to='/order' tabName='Orders' logo='fas fa-box'></Tabs>
            <Tabs to='/products' tabName='Products' logo='fas fa-tag'></Tabs>
            <Tabs to='/customer' tabName='Customers' logo='fas fa-users'></Tabs>
            <Tabs to='/analytic' tabName='Analytics' logo='fas fa-chart-line'></Tabs>
            <Tabs to='/marketing' tabName='Marketing' logo='fas fa-crosshairs'></Tabs>
            <Tabs to='/integrations' tabName='Integrations' logo='fab fa-instalod'></Tabs>
            <Tabs to='/discount' tabName='Discounts' logo='fas fa-dollar-sign'></Tabs>
        </div>
        </div>
        
        <Tabs to='/settings' tabName='settigs' logo='fas fa-gear'></Tabs>
    </div>
    
  )
}

export default Sidebar