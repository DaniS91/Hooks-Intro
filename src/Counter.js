import React, { useState, useEffect } from 'react';;

function Counter() {
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("effect!");
    document.title = counter;
  }, [counter]);

  return(
    <>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </>
  )
}

export default Counter;

// React's useState hook accepts any data type as an argument, including objects. So just like in the above example, we could create as many properties as we like and call on them using dot notation.

// const [hidden, setHidden] = useState(false);

// <button onClick={() => setHidden(!hidden)}>Hide/Show</button>