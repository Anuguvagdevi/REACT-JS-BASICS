import React, { useState } from "react"

 const UseState = () => {
  const [name,setName] = useState("vagdevi");
  return (
    <div>
        <center>
      <h1>{name}</h1>
      <button onClick={() => setName("Reddy")}>change</button>
      </center>
    </div>
  )
}
export default UseState