import {BrowserRouter as Router,Routes,Route,Link, Navigate} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import CreateBlog from './pages/createblog';
import Login from './pages/login';
import { useState } from "react";
import{signOut} from 'firebase/auth';
import{useNavigate} from "react-router-dom"
import {auth} from './firebase-config'


function App() {
  
  const [isAuth,setIsAuth]=useState(false);
  
  

  const signout= () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname("/login");
    })
  };
  return (
    <div>
    <Router>
      <img src="./images/logo.png" class="hello" alt="hello"/>
      <nav>

        <Link to="/">Home</Link>
        
        {!isAuth ? <Link to="/Login">Login</Link> :(
          <>
            <Link to="/Createblog">CreateBlog</Link>          
           <button onClick={signout}>logout</button>
          </> 
           )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Createblog" element={<CreateBlog />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth } />} />
      </Routes>
    </Router>
    </div>  
    
  );
}

export default App;
