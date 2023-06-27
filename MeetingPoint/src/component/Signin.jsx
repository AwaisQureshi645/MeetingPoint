import React,{useState} from 'react'
import '../App.css'
import auth from '../Firebase';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
export default function Signin() {
    const [user, setUser] = useState({
       email: "", password: ""
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
    const Adduser = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(auth => {
               console.log("Login successfully ")
            })
            .catch(error => {
                toast.error('Sign in Failed', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
  return (
  <>
  
  <div className="login-container">
      <form className="login-form" method='Post' onSubmit={handleEvent}>
        <h1 style={{textAlign:"center",color:"white"}}>Meeting Point</h1>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">E-mail:</label>
          <input type="text" id="username" name="username" onChange={hangleInput} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={hangleInput} required />
        </div>
       <h4 className='changeplace'>Don't have account?<Link to='/register'>Register</Link></h4>
        <button type="submit"  onClick={Adduser}>Login</button>
      </form>
    </div>
  </>
  )
}
