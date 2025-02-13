import React from 'react'
import Button from '../components/button/Button'

const SectionThree = (props) => {
  return (
    <div>
        <Button onClick={props.onClick} title={props.title} />
    </div>
  )
}

export default SectionThree