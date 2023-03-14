import React, {useState} from 'react'
import Header from './components/Header'
import MainBody from './components/MainBody'
import {Route, Routes} from "react-router-dom";
import ProfilePage from './components/ProfilePage';
//import UsersList from './components/UsersList';
//import UserInputs from './components/UserInputs';
import Byron from './components/ThirdPage';
// import Byron from './components/ThirdPage';

function App() {

  return (
    <div>
      <Header />
      
      

      <Routes>
        <Route path="/" element={<MainBody />}  />
        <Route path="/login" element={<ProfilePage />}  />
        {/* <Route path="/lists" element={<Byron  />}  /> */}
        <Route path="/input" element={<Byron />}  />
      </Routes>
      
      
    </div>
  )
}

export default App
