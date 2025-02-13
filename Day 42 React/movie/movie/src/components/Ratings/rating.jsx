const Rating = (props)=>{
    return (
        <div className="flex gap-3 justify-between mb-3">
            <div className="">
                <p className="text-xl text-slate-300">4.75</p>
                <p className=" text-slate-300">imdb</p>
            </div>
            <div className="border-[1px] border-slate-500"></div>
            <div className=" text-center">
                <p className="text-xl text-slate-300">2,710</p>
                <p className=" text-slate-300">Clients</p>
            </div>
            <div className="border-[1px] border-slate-500"></div>
            <div className="">
                <p className="text-xl text-slate-300">4.75</p>
                <p className=" text-slate-300">Popularity</p>
            </div>
        </div>
    )
}

export default Rating