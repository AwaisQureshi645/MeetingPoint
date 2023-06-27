import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Home from './component/Home';
import Signin from './component/Signin';
import RoomPage from './component/Roompage';


function App() {


  return (
    <>
<Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/signin' element={<Signin/>} />
        <Route exact path='/room/:roomId' element={<RoomPage/>} />

        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
