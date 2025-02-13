import React from 'react'
import SectionTow from './SectionTow'

const SectionOne = (props) => {
  return (
    <div>
        <SectionTow onClick={props.onClick} btntitle={props.title}/>
    </div>
  )
}

export default SectionOne