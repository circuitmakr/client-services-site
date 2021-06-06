import "./Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { setUser } from "../redux/authReducer";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

function Auth(props) {
  const [sel_Client, setSel_Client] = useState(0);
  const [sel_Provider, setSel_Provider] = useState(0);
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [usertype, setUserType] = useState('')
  const dispatch = useDispatch()
  let [p_logtype, setP_Logtype] = useState(false);
  let [c_logtype, setC_Logtype] = useState(false);
  
  useEffect(() => {
    setP_Logtype(!p_logtype);
    console.log("use Effect!");
  }, []);


  const provider_handleClick = () => {
    // setP_Logtype(!p_logtype) 
    setSel_Provider(!sel_Provider);
    console.log("clicked p_log", p_logtype);
    console.log("c_log", c_logtype);
    setUserType('provider')
  };
  const client_handleClick = () => {
    setC_Logtype(false);
    setP_Logtype(false);
    setSel_Client(!sel_Client);
    setC_Logtype(!c_logtype);
    console.log("clicked c_log", c_logtype);
    console.log("p_log", p_logtype);
    setUserType('client')
  };

  const handleLogin=()=>{
    console.log({username, password, usertype})
      axios.post('/auth/login', {username, password, usertype})
      .then((res)=>{
        
        dispatch(setUser(res.data))
       
        const {usertype} = res.data
        if(usertype==='client'){
          props.history.push('/c_dashboard')
        }
        if(usertype ==='provider'){
          props.history.push('/p_dashboard')
        }
      }).catch(err => console.log(err))
    }
    const checkup = useSelector(state => state)
    console.log("checkup:",checkup)
  const handleRegister = async () => {
    try {
      const res = await axios.post("/auth/register", {
        username: username,
        password: password,
        usertype: usertype
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout")
      this.props.logoutUser()
    } catch (err) {
      console.log(err)
    }
  }
  const checkuser = useSelector(state => state)
  console.log(checkuser)
  return (
    <div className="Login">
      <div className="main_container">
        <div className="app_header">
          <Link to="/p_dashboard">
            <h2>Choose Account Type</h2>
          </Link>
        </div>
        <div className="account_type">
          <button
            onClick={client_handleClick}
            className="opt_select"
            value="btn_client"
            disabled={sel_Provider}
          >
            <i className="fas fa-user"></i>
            <br />
            <h4>Client</h4>
          </button>
          <button
            onClick={provider_handleClick}
            className="opt_select"
            value="btn_provider"
            disabled={sel_Client}
          >
            <i className="fas fa-user-md"></i>
            <br />
            <h4>Provider</h4>
          </button>
        </div>
        <article className="login_container">
          <input onChange={(e)=> setUserName(e.target.value)} className="username txt" placeholder="Username"></input>
          <div className="login_spacer"></div>
          <input onChange={(e)=> setPassword(e.target.value)} className="password txt" type='password' placeholder="Password"></input>
        </article>
        <div className="btn_container">
          <button onClick={handleLogin} className="btn_login">LOGIN</button>
          <article>or</article>
          <article className="btnNewAccount">
            {/* <Link to="/c_dashboard" className="signup">
              CREATE AN ACCOUNT
            </Link> */}
            <a href='#' onClick={handleRegister} to="/c_dashboard" className="signup">
              CREATE AN ACCOUNT
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Auth;
