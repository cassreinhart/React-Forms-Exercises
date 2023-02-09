import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import {v4 as uuid} from 'uuid'
import './BoxList.css'

const BoxList = () => {
    const initialState = [
        {id: uuid(), width: '5rem', height: '4rem', backgroundColor: 'purple'},
        {id: uuid(), width: '4rem', height: '3rem', backgroundColor: 'coral'},
    ]
    const [boxes, setBoxes] = useState(initialState)

    const removeBox = (e) => {
        console.log(e.target)
        e.target.parentNode.remove()
        setBoxes(boxes.filter(box => box.id !== e.target.key))
    }
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {height: (newBox.height + 'em'), width: (newBox.width + 'em'), backgroundColor: newBox.backgroundColor, id: uuid()}])
    }
  
    return (
    <div className='BoxList'>
        <NewBoxForm addBox={addBox}/>
        <div>
            {boxes.map(({id, backgroundColor, width, height}) => <Box key={id} backgroundColor={backgroundColor} width={width} height={height} removeBox={removeBox}/>)}
        </div>
    </div>
  )
}

export default BoxList