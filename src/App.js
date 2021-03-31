import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
    
  function increment() {
    setCounter(counter + 1)
}

  function decrement() {
    setCounter(counter - 1) 
}

  return (
    <section >
        <h1>HELLO! lET'S TRY COUNTING {counter}</h1>
        <button onClick={increment}>" + " </button>
        <button onClick={decrement}>" - "</button> 
    </section>
  )
}

export default App;
