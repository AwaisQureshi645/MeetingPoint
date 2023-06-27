import React,{useState} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import auth from '../Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase'; // Assuming you have a separate firebase.js file for initializing Firebase

// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
export default function Register() {
    const [user, setUser] = useState({
        name: "", email: "", password: ""
    })
    let name, value;
    const hangleInput = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
        // console.log(user)
    }
    const handleEvent = (e) => {
        e.preventDefault();

    }

    const handleSubmit =async event => {

        event.preventDefault();
     
            try{

       
        
        const { email, password } = user;
        const response = await auth.createUserWithEmailAndPassword(auth, email, password)
        console.log("success")   
        // .then(auth => {
            //     toast.success('Sign up Successfully', {
            //         position: toast.POSITION.TOP_RIGHT,
            //         autoClose: 2000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     });
            // })
        
            // .catch(error => {
            //     toast.error('Sign up Failed', {
            //         position: toast.POSITION.TOP_LEFT,
            //         autoClose: 2000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     });
            // })
        }catch (error) {
            setError(error.message);
          }
        
    }
  return (
   <>
   
   <div className="login-container">
      <form className="login-form" onSubmit={handleEvent}>
        <h1 style={{textAlign:"center",color:"white"}}>Meeting Point</h1>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">UserName:</label>
          <input type="text" id="username" name="username" onChange={hangleInput}  required />
        </div>
        <div className="form-group">
          <label htmlFor="username">E-mail:</label>
          <input type="text" id="username" name="email" onChange={hangleInput} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={hangleInput} required />
        </div>
       <h4 className='changeplace'>Already have account?<Link to='/signin'>Login</Link></h4>
        <button type="submit" onClick={handleSubmit} >Login</button>
      </form>
    </div>
   </>
  )
}
