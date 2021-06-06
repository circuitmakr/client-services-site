import "./App.css";
import routes from './routes'
import {useDispatch} from 'react-redux'
import { setUser } from "./redux/authReducer";
import axios from 'axios'
import { useEffect } from "react";

function App() {
 const dispatch = useDispatch()
 useEffect(()=>{
 axios.get('/auth/user').then(res =>{
   dispatch(setUser(res.data.user))
 }).catch((err)=>{
   console.log(err)
 })
 },[])
  return (
    <div>
    {routes}
    </div>
  );
}

export default App;
