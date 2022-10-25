import {useState} from "react";

function App(){
  const [FirstName,setFirstname] = useState('')
  const [LastName,setLastname] = useState('')
  const type=Event=>{
    setFirstname(Event.target.value);
  }
  const type3=Event=>{
    setLastname(Event.target.value);
  }
  return(
    <>
    <input type="text" placeholder="firstname" onChange={type}></input><br></br>
    <input type="text" placeholder="lastname" onChange={type3}></input>

    <h1>Firstname:{FirstName}</h1>
    <h1>Lastname:{LastName}</h1>
    </>
  )
}
export default App
  