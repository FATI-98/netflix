import React ,{useEffect}from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Loginscreen from './screens/Loginscreen'
import Profilescreen from './screens/Profilescreen.js'
import {useDispatch, useSelector} from 'react-redux'
import {auth} from './firebase'
import {login,logout, selectUser} from './features/userSlice'
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
   const unsubscribe=auth.onAuthStateChanged((authuser)=>{
     if(authuser){
      dispatch(login({
        uid:authuser.uid,
        email:authuser.email,
      }));
     }else{
      dispatch(logout({user:authuser}));
     }
    });
    return unsubscribe;
  }, [dispatch])
  
  return (
    <div className="app">
      <Router>
     
        {!user ?(
          
          <Loginscreen/>
          
         
        ):(
          <Switch>
           <Route path='/profile'>
             <Profilescreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
           </Switch>
        )}
      
       
      </Router>
     
    </div>
  );
}

export default App;
//https://netflix-clone-11fa7.web.app/