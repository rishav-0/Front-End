import React from 'react'

const CommentCard = (props) => {
    const {rating,comment,reviewerName,date} = props
    console.log(comment,'review')
    const renderStars = () => {
        const stars = [];
        for(let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
        }
        return stars;
    }

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-3 border-b border-slate-300  p-5'>
        <div className="flex  gap-2  w-1/3">
            <img src="https://www.phdmedia.com/poland/wp-content/uploads/sites/70/2015/05/temp-people-profile.jpg" alt="" className="h-8 w-8 rounded-full" />
            <div className="">
                <p className="text-xs text-nowrap">{reviewerName}</p>
                <p className="text-xs text-nowrap text-slate-400">United State</p>
            </div>
        </div>
        <div className="w-2/3">
            <p className="font-semibold">{comment}</p>
            <p className="text-xs mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas rem dolorem aliquam quaerat dolorum quod ipsam quo sunt! Explicabo, velit quo? Enim asperiores iure autem doloribus? Porro ratione tenetur voluptas.</p>
            <div className="flex justify-between">
                <div className="flex gap-1">
                    {
                      renderStars()
                    }
                    
                  
                    <p className="text-xs text-slate-400">{date}</p>
                </div>
                <p className=" text-orange-400 cursor-pointer text-xs">Was this helpful?</p>
            </div>
        </div>
    </div>
  )
}

export default CommentCard