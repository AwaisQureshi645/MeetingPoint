import React,{useState} from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [room,setroom]=useState("");
    const Navigate=useNavigate();


    const handleForm=(e)=>{
        e.preventDefault();
        navigation.navigate(`/room/${room}`);
    }
  return (
   
    <>
        
    <div className="form_comnents">
    <h1 style={{textAlign:"center"}} className='mainHeading'>Meeting Point</h1>
        <form className='user_id' onSubmit={handleForm}>

    <label htmlFor="User-Id" style={{color:"white"}}>Enter User Id :</label>
    <input type="text" id='User-Id' required autoComplete='false'  onChange={(e)=>{
        setroom(e.target.value)
    }}/>
   <button type='submit' >Join </button>
    


    </form></div>
    
    </>
  )
}
