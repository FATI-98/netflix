import React from 'react'
import { auth } from '../firebase'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'
import Nav from '../Nav'
import './profilescreen.css'

//import PlanScreen from './PlansScreen'
function Profilescreen() {
    const user =useSelector(selectUser);
   
    return (
        <div className='profile'>
            <Nav link/>
            
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
               
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                      alt=""
                    />
                   
                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3>Plans</h3>
                            {/*<PlansScreen />*/}
                            <button className="profile-signout"onClick={()=>auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilescreen
