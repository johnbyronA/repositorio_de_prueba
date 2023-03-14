import React from 'react'
//import { Link } from 'react-router-dom'
import Card from "../ReusableComponents/Card"
import "../components/UsersList.css"
//import Button from "../ReusableComponents/Button"


const UsersList = (props) => {
      

  return (
    <Card>
            <ul className='users'>
                {props.users.map(user => 
                <li key= {user.id}> 
                {user.name} 
                <p></p>
                {user.age}
                <button>Remove</button>
                </li> 
                )}
            </ul>
    </Card>
  )
}

export default UsersList
