import React from 'react'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

const SectionTow = (props) => {
  return (
    <div>
        <SectionThree onClick={props.onClick} mode={props.mode} title='Hello'/>
        <SectionFour />
    </div>
  )
}

export default SectionTow