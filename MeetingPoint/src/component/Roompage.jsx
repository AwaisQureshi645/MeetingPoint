import React,{useState,useEffect }from 'react'
import './style.css';
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { linkWithPopup } from 'firebase/auth';
export default function Roompage() {
  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  //const [textToCopy, setTextToCopy] = useState(currentURL);

  
  // Generate conference link from the current URL

    const {roomId}=useParams()

const Meeting=async(element)=>{
const appId=1119679166;
const Serversecret="e6d52327c955cd9f3eb37f79003f819b";
const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,Serversecret,roomId,Date.now().toString(),roomId)
const zp=ZegoUIKitPrebuilt.create(kitToken);
zp.joinRoom({
  container:element,
  scenario:{
    mode:ZegoUIKitPrebuilt.VideoConference,
  
  }

  
})



}

    console.log("roompage is render")
  return (
    <div>
   <div className='meeting_point' ref={Meeting}>    </div>
  
     <section className='share_link'>
     <h3>Share Link</h3><br/>
      <p>{currentURL} </p>
      <button onClick={()=>{
 navigator.clipboard.writeText(currentURL);
 console.log("copy full ")
      }}>copy</button>
     </section>
  
    </div>
  )
}
