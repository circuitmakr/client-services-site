import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../redux/authReducer";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';


function Login() {

  return (

    <div className="Login">
      <div className="main_container">
        <div className="app_header">
          <h2>Choose Account Type</h2>
        </div>
        <div className="account_type">
          <button className="opt_select" id='btn_client'>
            <i className="fas fa-user"></i>
            <br />
            <h4>Client</h4>
          </button>
          <button className="opt_select" id='btn_provider'>
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
          <button className="btn_login"><Link to='/p_dashboard'>LOGIN</Link></button>
          <article>or</article>
          <article className="btnNewAccount">
            <Link to='/c_dashboard' className='signup'>CREATE AN ACCOUNT</Link>
          </article>
        </div>
      </div>
    </div>
  
  );
}

export default Login;