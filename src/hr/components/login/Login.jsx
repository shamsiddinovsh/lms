import { useState } from "react"
import AuthUser from "../auth/Auth";

export default function Login() {
    const {http,setToken} = AuthUser();
    const [username,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = (event) =>{
        event.preventDefault()
        // api call
        http.post('/auth',{username:username,password:password}).then((res)=>{
            setToken(res.data.token);
        })
    }

    return(
        <div className="login">
             <div className="container">
              <div className="row">
            <div className="col-sm-5">
                <form onSubmit={submitForm} className="card">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="Enter username"
                            onChange={e=>setEmail(e.target.value)}
                        id="username" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Login</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}