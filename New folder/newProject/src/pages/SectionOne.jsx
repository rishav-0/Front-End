import React, { useContext } from 'react'
import SectionTow from './SectionTow'
import { Globalcontext } from '../context'

const SectionOne = (props) => {

  const {mode} = useContext(Globalcontext)

  return (
    <div>
        <SectionTow onClick={props.onClick} />
    </div>
  )
}

export default SectionOne