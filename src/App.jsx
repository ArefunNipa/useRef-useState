import { useState, useRef } from 'react';
import './App.css'


function App() {
  let[count, setCount] = useState(10);
  let countRef = useRef(10);

  // useState
  let handleClick=()=>{
    count++
    setCount(count)
  }
  // useState

  // useRef
  let handleClick2=()=>{
    console.log(countRef.current++);
  }
  // useRef

  return (
    <>
    <h1>useState</h1>
    <h2>{count}</h2>
    <button onClick={handleClick}>Click</button>
    {/* =================== */}

    <h1>useRef</h1>
    <h2>{countRef.current}</h2>
    <button onClick={handleClick2}>Click</button>
    </>
  )
}
export default App
