import React from 'react'
import Header from './components/Header'
import MainBody from './components/MainBody'
import {Routes} from "react-router-dom";
import UserInputs from './components/UserInputs';

function App() {


  return (
    <div>
      <Header />

      {/* <Routes>
        <Route path="/" element={<MainBody />}  />
      </Routes > */}

      <MainBody />
      <UserInputs />
      
    </div>
  )
}

export default App
