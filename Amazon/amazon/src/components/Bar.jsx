import React from 'react'
import ViewAll from './ViewAll'

const Bar = (props) => {
  return (
    <div className="flex p-5 justify-between">
        <p className="text-sm">{props.title}</p>
      <ViewAll title={props.btn} />
      </div>
  )
}

export default Bar