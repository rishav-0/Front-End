import React from 'react'

const Card = (props) => {
    const {name} = props
    console.log(name)

  return (
    <div>{name}</div>
  )
}

export default React.memo(Card)