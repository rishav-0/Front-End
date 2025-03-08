import React from 'react'
import Post from './Post'
import Newpost from './Newpost'

const Mid = () => {
    return (
        <div className='p-4 col-span-2  flex flex-col justify-between'>
            <div className="">
                <p className="text-xl font-bold mb-6">Feeds</p>
            <div className="overflow-y-auto h-[500px]  no-scrollbar mb-4 relative">
                <Post profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMlSKhdbdajauJIvoaLvuFN38zVzP65rWSXGDRcsGmgLz9F8jvq57a9vpga21KbP3ZSw&usqp=CAU' image='https://i1.adis.ws/i/canon/get-inspired-landscape-photography-tips-1-16.9_e7ae10efb78c4526801d6037f80ab177?$hero-header-half-16by9-dt-jpg$'
                    userName='George lamer' time='4 hours ago' like='3434' view='7880' />
                <Post profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMlSKhdbdajauJIvoaLvuFN38zVzP65rWSXGDRcsGmgLz9F8jvq57a9vpga21KbP3ZSw&usqp=CAU' image=''
                    userName='George lamer' time='4 hours ago' like='3434' view='7880' />
                <Post profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMlSKhdbdajauJIvoaLvuFN38zVzP65rWSXGDRcsGmgLz9F8jvq57a9vpga21KbP3ZSw&usqp=CAU' image='https://i1.adis.ws/i/canon/get-inspired-landscape-photography-tips-1-16.9_e7ae10efb78c4526801d6037f80ab177?$hero-header-half-16by9-dt-jpg$'
                    userName='George lamer' time='4 hours ago' like='3434' view='7880' />
                <Post profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMlSKhdbdajauJIvoaLvuFN38zVzP65rWSXGDRcsGmgLz9F8jvq57a9vpga21KbP3ZSw&usqp=CAU' image=''
                    userName='George lamer' time='4 hours ago' like='3434' view='7880' />
            </div>
            </div>
            <Newpost user />
        </div>
    )
}

export default Mid