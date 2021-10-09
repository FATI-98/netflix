import React ,{useRef}from 'react'
import { auth } from '../firebase';
import './signupscreen.css'
function Signupscreen() {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authuser)=>{
            //console.log(authuser);

        }).catch(error=>{
            alert(error.message)
        })
    };
    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authuser)=>{
            //console.log(authuser);

        }).catch(error=>{
            alert(error.message)
        })
    };
    return (
        <div className='signupscreen'>
            <img  className='login-logo'
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                  alt=''
            />      
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signin}>Sign In</button>

                <div>
                    <span className="signup_gray">New to Netflix ?</span>
                    <span className='signup_link'onClick={register}> Sign Up now</span>
                </div>

            </form>
        </div>
    )
}

export default Signupscreen
