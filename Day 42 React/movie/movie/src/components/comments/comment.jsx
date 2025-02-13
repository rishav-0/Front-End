import './comment.css'

const Comment = (props)=>{
    return (
        
            <div className="p-3 bg-gray rounded-lg min-w-[300px] max-w-[300px] cursor-pointer" onClick={()=>console.log(props)}>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-2 items-center">
                        <div class="relative min-w-12 min-h-12  rounded-full flex items-center justify-center">
                            <img class="w-12 h-12 rounded-full" src={props.image} alt=""/>
                            <span class="top-0 left-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                        <div className="">
                            <p className="text-slate-300  font-bold">{props.title}</p>
                            <p className="text-slate-300 line-clamp-1">{props.caption}</p>
                        </div>
                    </div>
                    
                    

                </div>
                <p className="text-slate-300 line-clamp-2">
                    {props.desc}
                </p>
            </div>
            
       
    )
}

export default Comment