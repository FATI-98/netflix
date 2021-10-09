import React,{useState,useEffect} from 'react'
import './nav.css'
import {useHistory,Link} from 'react-router-dom'
function Nav( {link=false}) {
    const history=useHistory();

    const[show,handleShow]=useState(false);
    const transitionNavBar=()=>{

        if(window.scrollY>100){
             handleShow(true);
        }else{
             handleShow(false);
        }

    };
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return()=>window.removeEventListener('scroll',transitionNavBar);
     },[])
    return (
        <div className={`nav ${show && 'nav-black'}`}>
           <div className='nav-contents'> 
             <Link to={link &&'/'}>
             <img  className='nav-logo'
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
             /> 
             </Link>
             <img className='nav-avatar'
              onClick={()=>history.push("/profile")}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=''
             /> 
            </div> 
        </div>
    )
}

export default Nav

