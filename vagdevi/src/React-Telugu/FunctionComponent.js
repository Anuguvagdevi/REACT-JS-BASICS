import React, { useState } from "react"

 const FunctionComponent = () => {
  const [name] = useState("amma!!!")
  return (
    <div>
      <h2>welcome to {name}</h2>
    </div>
  )
}
export default FunctionComponent