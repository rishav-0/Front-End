import React, { useContext } from 'react'
import Button from '../components/button/Button'
import { Globalcontext } from '../context'

const SectionFour = (props) => {

  const {mode} = useContext(Globalcontext)

  return (
    <div>
        <Button title={mode} />
    </div>
  )
}

export default SectionFour