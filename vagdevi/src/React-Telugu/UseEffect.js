import React, { useState, useEffect } from "react"

 const UseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => console.log("clicked"), [count])
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
export default UseEffect