import React from 'react'
import TabSetting from './TabSetting'
import vector from '../../images/Vector.png'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'
import vector3 from '../../images/Vector3.png'
import vector4 from '../../images/Vector4.png'
import group from '../../images/group.png'
import shield from '../../images/shield.png'
import Heading from './Heading'
import Check from './Check'
import Search from '../../Components/Search'


const Settings = () => {
    return (
        <div className='bg-[#1a1a1a] p-4 flex gap-4 '>
            <div className="w-[450px] rounded-2xl bg-[#212121] ">
                <div className="p-4">

                    <Search title='Search settings' />
                </div>
                <div className="pr-4">
                    <TabSetting title='Account' icon={group} />
                    <TabSetting title='Apps and website' icon={vector} />
                    <TabSetting title='Change Password' icon={vector1} />
                    <TabSetting title='Activity log' icon={vector2} />
                    <TabSetting title='Privacy and Security' icon={shield} />
                    <TabSetting title='Others' icon={vector3} />
                    <TabSetting title='Log Out' icon={vector4} />
                </div>

            </div>
            <div className="rounded-2xl w-full bg-[#1c1c1c] overflow-hidden">
                <Heading title='Privacy and security' icon={shield} />
                <div className="p-4">
                    <p className="text-4xl text-white font-light mb-4">Account Privacy</p>
                    <Check title='Private account'/>
                    <p className="text-xs mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam suscipit debitis magnam? Sint, perspiciatis. Cum natus enim eveniet blanditiis?</p>
                    <hr className='mb-4'/>

                    <p className="text-4xl text-white font-light mb-4">Account status</p>
                    <Check title='Show activity status'/>
                    <p className="text-xs mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam suscipit debitis magnam? Sint, perspiciatis. Cum natus enim eveniet blanditiis?</p>
                    <hr className='mb-4'/>

                    <p className="text-4xl text-white font-light mb-4">Two-factor authentication</p>
                    <Check title='Use authentication app'/>
                    <p className="text-xs mb-2 text-white"> Perspiciatis veniam suscipit debitis magnam? Sint, perspiciatis. Cum natus enim eveniet blanditiis?</p>
                    <Check title='Use authentication app'/>
                    <p className="text-xs mb-4 text-white"> Perspiciatis veniam suscipit debitis magnam? Sint, perspiciatis. Cum natus enim eveniet blanditiis?</p>
                    <hr className='mb-4'/>

                </div>

            </div>
        </div>

    )
}

export default Settings