import "./Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { setUser } from "../redux/authReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Login() {
const [sel_Client, setSel_Client] = useState(0)
const [sel_Provider, setSel_Provider] = useState(0)
let [p_logtype, setP_Logtype] = useState(false)
let [c_logtype, setC_Logtype] = useState(false)

useEffect(()=>{
  setP_Logtype(!p_logtype)
  console.log('use Effect!')
},[])



const provider_handleClick=()=>{
  // setP_Logtype(!p_logtype)
  // setC_Logtype(false);
  setSel_Provider(!sel_Provider);
  console.log('clicked p_log', p_logtype)
  console.log('c_log', c_logtype)

}
const client_handleClick=()=>{
  setC_Logtype(false);
  setP_Logtype(false);
  setSel_Client(!sel_Client);
  setC_Logtype(!c_logtype);
  console.log('clicked c_log', c_logtype)
  console.log('p_log', p_logtype)
}
 
  return (
    <div className="Login">
      <div className="main_container">
        <div className="app_header">
          <h2>Choose Account Type</h2>
        </div>
        <div className="account_type">
          <button onClick={client_handleClick} className="opt_select" value="btn_client" disabled={sel_Provider}>
            <i className="fas fa-user"></i>
            <br />
            <h4>Client</h4>
          </button>
          <button onClick={provider_handleClick} className="opt_select" value="btn_provider" disabled={sel_Client}>
            <i className="fas fa-user-md"></i>
            <br />
            <h4>Provider</h4>
          </button>
        </div>
        <article className="login_container">
          <input className="username txt" placeholder="Username"></input>
          <div className="login_spacer"></div>
          <input className="password txt" placeholder="Password"></input>
        </article>
        <div className="btn_container">
          <button className="btn_login">
            <Link to="/p_dashboard">LOGIN</Link>
          </button>
          <article>or</article>
          <article className="btnNewAccount">
            <Link to="/c_dashboard" className="signup">
              CREATE AN ACCOUNT
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Login;
