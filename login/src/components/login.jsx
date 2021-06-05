import React from 'react';
import Background from './../im.JPG'
import Logo from './../logo.svg'
import {useState} from 'react';




const Login=()=>{
    const [email,setEmail]= useState("")
   
    const [password,setPassword] = useState("")
   
    
    const submitHandler=(e)=>{ 
        e.preventDefault()
        if(email === "" && password === "")
        {
            alert("enter all fields")
        }
        else{
            console.log (email)
            console.log(password)  
        }
        }
    return(
        <div className="main">
            <div className='Login' >
                <div className='imgdiv'>
                    <img className="image" src= {Background}></img>
                    <img className='logo' src={Logo}></img>
                    <p className='text'>
                    <span>Accelerate your carrer in</span><br></br>
                    Advanced Data Sciences
                    </p>
                </div>
            </div>
            <div className='Loginform'>              
            
            <h1 className='title'>Admissions <span>2021</span></h1><br></br>

            <h2 >LOGIN</h2><br></br> 
                  <form onSubmit={(event)=>submitHandler(event)}>
                    <input type='text' placeholder='Email*' onChange={(event)=> setEmail(event.target.value)  } ></input><br></br><br></br>
                    <input type='password' placeholder='password*' onChange={(event)=> setPassword(event.target.value)  }></input><br></br><br></br>
                    <button type ='submit'  > LOGIN </button>
                </form>         
                       
              
            </div>
        </div>
    )

}
export default Login;
