const Card2 = (props)=>{
    return (
        <div className="flex gap-2 mb-3">
            <div className="w-[120px] overflow-hidden rounded-lg">
                <img className="w-full" src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9255832_p_v10_ab.jpg" alt="" />
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <p className="text-white">Laurance Anyways</p>
                        <p className="text-sm text-slate-300">Xavier Dolan</p>
                    </div>
                    <div class="rounded-full h-[30px] w-[30px] p-1 flex items-center justify-center border"><i class="fas fa-play text-sm text-slate-300  cursor-pointer"></i></div>
                </div>
                <p className="text-slate-300 line-clamp-2 w-2/3">
                    quisquam delectus iusto repellat vitae. Modi.
                </p>
            </div>
        </div>
    )
}

export default Card2