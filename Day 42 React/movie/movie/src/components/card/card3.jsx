import '../comments/comment.css'

const Card3 = (props)=>{
    return (
        <div className="p-3 bg-gray rounded-sm mb-3">
            <p className='mb-3'><i className="fas fa-film text-slate-300"></i></p>
            <p className="text-xs text-slate-300">Premium Movies</p>
            <div className="flex justify-between items-center">
                <p className="text-slate-300 text-lg">Taste of Cinema</p>
                <i className="fas fa-arrow-right-long text-xl text-slate-500"></i>
            </div>
        </div>
    )
}

export default Card3