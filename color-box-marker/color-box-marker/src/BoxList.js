import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import {v4 as uuid} from 'uuid'

const BoxList = () => {
    const initialState = [
        {id: uuid(), width: '5em', height: '4em', backgroundColor: 'periwinkle'},
        {id: uuid(), width: '4em', height: '3em', backgroundColor: 'coral'},
    ]
    const [boxes, setBoxes] = useState(initialState)

    const removeBox = (e) => {
        console.log(e.target)
        setBoxes([...boxes])
    }
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
  
    return (
    <div className='BoxList'>
        <NewBoxForm addBox={addBox}/>
        <div>
            {boxes.map(({id, backgroundColor, width, height}) => <Box key={id} backgroundColor={backgroundColor} width={width} height={height} />)}
        </div>
    </div>
  )
}

export default BoxList