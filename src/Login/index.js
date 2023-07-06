import React, {useState} from "react";
import "./style.css";

const Login =() =>{
const [username, setUsername] = useState('');
const [password, setUserpassword] = useState('');
console.log({username});
console.log({password});

    return(
        <div>
            <form className="form">
                <h1>Login</h1>
                <input placeholder="Enter Username" type="text" 
                onChange={(e)=>{setUsername(e.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
                <input placeholder="Enter Password" type="password"
                onChange={(e)=>{setUserpassword(e.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;