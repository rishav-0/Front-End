import Button from '../Button/button'

import './card.css'
const Card = (props)=>{
    return (
        <div className='card'>
            <img className='image' src={props.image} alt="" />
            <p className='title'>{props.title}</p>
            <p>{props.summary}</p>
            <div className='flex'>
                <p className='buy'>Buy</p>
                <p className='addtocart'>Add to cart</p>
                 <Button title="Hello Me"/>
            </div>
        </div>
    )
}

export default Card     