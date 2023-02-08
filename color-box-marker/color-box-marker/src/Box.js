import React from 'react'

const Box = ({backgroundColor, width, height, removeBox}) => {
  

  return (
    <div className='box-container'>
      <div className='Box' style={{backgroundColor, width, height}}></div>
      <button onClick={removeBox}>X</button>
    </div>
  )
}

export default Box