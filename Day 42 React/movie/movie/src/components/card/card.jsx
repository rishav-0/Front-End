const Card = (props)=>{
    return (
        <div className="flex gap-3 mb-3">
            <div className="min-w-[180px] max-w-[200px] rounded-sm overflow-hidden">
                <img className="w-full " src="https://i.pinimg.com/originals/00/ff/56/00ff5644e13bc00d1692cb6f9773c6b3.jpg" alt="" />
            </div>
            <div className="">
                <p className="text-lg text-white font-bold">Mommy</p>
                <p className=" text-slate-300 mb-3">xavier dolan </p>
                <div className="border-[1px] border-slate-400 mb-3"></div>
                <p className="line-clamp-2 mb-3 text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, beatae.
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-white">4.75</p>
                    <div className="flex items-center gap-[2px] text-xs">

                        <i className="fas fa-star text-yellow-300"></i>
                        <i className="fas fa-star text-yellow-300"></i>
                        <i className="fas fa-star text-yellow-300"></i>
                        <i className="fas fa-star text-yellow-300"></i>
                        <i className="fas fa-star text-yellow-300"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card