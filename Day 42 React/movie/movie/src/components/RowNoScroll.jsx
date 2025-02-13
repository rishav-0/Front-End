import React from 'react'

const RowNoScroll = (props) => {
  return (
    <div className={`overflow-x-auto  flex  gap-3 no-scrollbar ${props.myStyle}`}>
        {props.children}
    </div>
  )
}

export default RowNoScroll