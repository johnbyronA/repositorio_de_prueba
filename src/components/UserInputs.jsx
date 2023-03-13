
import Card from "../ReusableComponents/Card"
import Button from "../ReusableComponents/Button"
import "./UserInputs.css"
//import React,{useState} from "react"

const UserInputs = () => {
  
    return (
  
    <Card>
      <form className="input">
        <label htmlFor="Front">Username</label>
        <input type="text" name="" id="text" />
  
        <label htmlFor="Reverse">Email</label>
        <input type="text" name="" id="text" />
  
        <Button type="submit">Save</Button>
        <Button type="submit">Change Password</Button>
      </form>
    </Card>
    )
  }
  
  export default UserInputs