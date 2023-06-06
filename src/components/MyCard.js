import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addNumber from '../actions/addnumber'
import decNumber from '../actions/decnumber'


const myCard = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.changeNumber);
    return (
        <div>
            <Heading> {state} </Heading>
            <button onClick={() => dispatch(addNumber())}> increment</button>
            <button onClick={() => dispatch(decNumber())}> decrement</button>
        </div>
    )

}

export default myCard