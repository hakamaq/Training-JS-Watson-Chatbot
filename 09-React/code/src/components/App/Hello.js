import { useState, useEffect } from "react"

const Hello = (props) => {
  // Set state for count
 const [count, setCount] = useState(0)
 
 // Create function for clicking button
 const buttonClicked = () => {
  setCount(count + 1);
 }
 
 useEffect(() => {
  console.log("I initiated component")
 }, [])
 
  return(
    <div>
      {console.log("I rendered Hello Component")}
      <p>Hi there, {props.firstName}</p>
      { props.children }
      {/* After Break Create button */}
      <button onClick={buttonClicked} style={{padding: "0 20px"}}>{count}</button>
    </div>
  )
}

export default Hello