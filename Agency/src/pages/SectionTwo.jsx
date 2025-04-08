import React from 'react'

function SectionTwo() {
  return (
    <div className="snap-start h-screen bg-[#fffcf1] py-10">
        <div className='  container mx-auto lg:px-20'>
            <p className="text-sm mb-4">About Us</p>
            <p className="text-3xl capitalize font-bold mb-8 nato">We are here to make your website <br /> look more elegant and stylish! </p>
            <div className="flex justify-between gap-6  relative">
                <img className="hidden md:block rounded-xl w-1/2" src="https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=" alt=""  />
                <div className="">
                    <p className="text-sm mb-8 line-clamp-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ex minus necessitatibus, pariatur eveniet dolorum tenetur perferendis doloribus aliquam error.</p>
                    <p className="text-sm mb-2">
                        <i className="fas mr-4 fa-check"></i>
                        Far Far Away behind the world mountains
                    </p>
                    <p className=" text-sm mb-2 ">
                        <i className="fas fa-check mr-4"></i>
                        Large language ocean
                    </p>
                    <p className=" text-sm mb-2 ">
                        <i className="fas fa-check mr-4"></i>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                </div>
                <div className=" absolute -bottom-28 md:-bottom-10 lg:bottom-0 right-0">
                    <div className="flex justify-around gap-6 bg-[#d7f953] p-5 rounded-lg ">
                        <div className="text-center font-bold ">
                            <p className="text-xl ">280</p>
                            <p className="text-xs">Project Launches</p>
                        </div>
                        <div className="h-12  border border-black"></div>
                        <div className="text-center font-bold">
                            <p className="text-xl">280</p>
                            <p className="text-xs">Happy clients</p>
                        </div>
                        <div className="h-12  border border-black"></div>
                        <div className="text-center font-bold ">
                            <p className="text-xl">280</p>
                            <p className="text-xs">User Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo