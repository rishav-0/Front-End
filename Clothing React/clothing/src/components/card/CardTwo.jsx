import React from 'react'

const CardTwo = (props) => {
  return (
    <div className="mb-5"> 
        <div className={`w-[200px] h-[180px] hover:h-[220px] mb-2 rounded-xl overflow-hidden relative cursor-pointer animation  bg-cover bg-no-repeat bg-center ${props.className}`} style={{backgroundImage:`url(${props.img})`}}>
        </div>
        <div className="flex justify-between">
            <div className="">
                <p className="text-xs">Summer Girles Dress</p>
                <p className="text-xs">
                    <i className="fas fa-star text-yellow-400"></i>
                    (3.4)
                </p>
            </div>
            <p className="text-sm">$120</p>
        </div>
    </div>
  )
}

export default CardTwo