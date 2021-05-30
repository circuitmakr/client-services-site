import "./App.css";
import { useState } from "react";
import axios from "axios";
import { setUser } from "./redux/authReducer";
import { useDispatch } from "react-redux";

function App() {
  const handleSelection = (e) => {
    e.target.style.backgroundColor = '#0B4F6C'
    e.target.style.color = '#f5f5f5';
  };
  let button
  return (
    <div className="App">
      <div className="main_container">
        <header className="header">
          <h2>Choose Account Type</h2>
        </header>
        <div className="account_type">
          <button ref={el =>(button = el)} onClick={handleSelection} className="opt_select" id='btn_client'>
            <i class="fas fa-user"></i>
            <br />
            <h4>Client</h4>
          </button>
          <button ref={el =>(button = el)} onClick={handleSelection} className="opt_select" id='btn_provider'>
            <i class="fas fa-user-md"></i>
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
          <button className="btn_login">LOGIN</button>
          <article>or</article>
          <article className="btnNewAccount">
            <a href="#">CREATE AN ACCOUNT</a>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
