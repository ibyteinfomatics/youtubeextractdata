import { useState } from "react";
import { NotificationManager } from "react-notifications";
import { userLogin } from "../services/Api";
import Cookies from "js-cookie";
import {  useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailError, setMailError] = useState(null);

  const nevigate = useNavigate();

  const checkEmail = (email)=>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const match = email.match(regex)
    if(!match){
      setMailError('Invalid Email')
    }else{
      setMailError(null)
    }
  }

  const login = async () => {
    console.log(email, password);
    let item = { email, password };
    if(mailError){
      return;
    }
    const res = await userLogin(item);
    
    if(res?.success){
      Cookies.set("token", res?.token);
      NotificationManager.success(res?.message);
      nevigate("/get_data")
    }
    else{
      NotificationManager.error(res?.message)
    }
  }

  return (
    <div className=" container h-100 mt-5 ">
      <div className="d-flex align-items-center justify-content-center">
        <img src=" logo.png" alt="" />
      </div>
      <h1 className="text-center ">YouTube Api Data </h1>
      <div className="container bg-secondary bg-gradient w-25 m-auto p-5 mt-5 pt-5">
        <h4 className="text-center text-light">Enter Your Details</h4>
        <div className="form-floating mb-3  ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {setEmail(e.target.value); checkEmail(e.target.value)}}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <small className="text-danger">{mailError}</small>
        <div className="form-floating mb-3  ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="button" className="btn btn-primary w-100" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
