
import React, {useState} from "react"
import UserInputs from "./UserInputs"
import UsersList from "./UsersList"
//import Button from "../ReusableComponents/Button";
//import Card from"../ReusableComponents/Card"

const Byron = (props) => {

  const [usersList, setUserslist] = useState([]);

  const addUserHandler= (name,age) =>{

    const id=usersList.length+1

    setUserslist((prev)=>{
      return [...prev, {name, age, id}]
    })
  }

  return (
  
  <div>
    <UsersList users={usersList} />
    <UserInputs onAddUser={addUserHandler} />
  </div>
  )
}

export default Byron