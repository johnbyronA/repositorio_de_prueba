
//import Card from "../ReusableComponents/Card"
import Button from "../ReusableComponents/Button"
import "./UserInputs.css"
import React,{useState} from "react"

const UserInputs = (props) => {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
      return;
    }
    if (enteredAge < 1){
      return;
    }

    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }
  
  const usernameChangeHandler= (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler= (event) => {
    setEnteredAge(event.target.value)
  }

 

    return (

    
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">Front</label>
        <input type="text" value={enteredUsername} onChange={usernameChangeHandler} id="username" />
  
        <label htmlFor="age">Reverse</label>
        <input type="text" value= {enteredAge} onChange={ageChangeHandler} id="text" />
  
        <Button type="submit">Add</Button>
        
      </form>
  
    )
  }
  
  export default UserInputs