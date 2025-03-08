import React from 'react'
// import socialMediaIcons from '../utils/index/socialMediaIcons'
const socialMediaIcons = [
  'fab fa-facebook',
  'fab fa-instagram',
  'fab fa-linkedin',
  'fab fa-youtube',
  'fa-sharp fa-regular fa-paperclip'
];

const Social = () => {
  return (
    <div className='flex justify-between gap-2 mb-6 cursor-pointer'>
           {socialMediaIcons.map((iconClass, index) => (
                <div  key={index} className="h-[40px] w-[48px] flex items-center justify-center text-xl rounded-lg bg-slate-100">
                    <i className={iconClass}></i>
                </div>
            ))}
    </div>
  )
}

export default Social