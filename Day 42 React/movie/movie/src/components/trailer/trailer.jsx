import './trailer.css'

const Trailer = (props)=>{
    return (
        <div className="rounded-lg p-3 bg flex justify-between items-center mb-3 sm:max-w-[300px]">
            <p className="text-slate-300">Plat Trailer 4:57</p>
            <div className="rounded-full h-[30px] w-[30px] p-1 flex items-center justify-center border">
                <i className="fas fa-play text-sm text-slate-300  cursor-pointer"></i>
            </div>
            
        </div>
    )
}
export default Trailer