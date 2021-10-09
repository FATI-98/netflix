import React,{useState} from 'react'
import './loginscreen.css'
import Signupscreen from './Signupscreen'
function Loginscreen() {
    const [signin, setSignin]=useState(false);
    return (
        <div className='login'>
            {signin ?(
                   <Signupscreen/>
                
            ):(
                <>
                <div className="login-header">
                 <img  className='login-logo'
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                  alt=''
                 />

                <button className='login-button' onClick={()=>setSignin(true)}>Sign Up</button>
                <div className='login-gradient'/>
                </div>
                <div className="login-body">
                   <h1>Unlimited movies,TV shows and more</h1>
                   <h2>Watch anywhere. Cancel at anytime</h2>
                   <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                  <div className="login-input">
                    <form>
                        <input type="email" placeholder='Email Address'/>
                        <button className="login-started" onClick={()=>setSignin(true)}>Get Started</button>
                    </form>
                  </div>
                
                 
                </div>
                </>
            )}
        </div>
    )
}

export default Loginscreen
