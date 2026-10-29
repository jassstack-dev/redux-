import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice'


const App = () => {

  
  const {count} = useSelector((store)=> store.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>This is the counter app with redux toolkit</h1>
     <p>hello bro {count}</p>
     <button onClick={()=> dispatch(increment())} >increment</button><br />
     <button onClick={()=> dispatch(decrement())} >decrement</button>
    </div>
  )
}

export default App