import React from 'react';
import Header from './P_Header'
import './P_Notes.css'
import {useState} from 'react'


function Notes(){
  const [providerItem, setProviderItem] = useState()
  const [providerList, setProviderList] = useState([])
 
  
  const handleChange=(e)=>{
    setProviderItem(e.target.value);
    console.log('this is e', e.target.value)
    console.log('this is providerItem:', providerItem)
    console.log('this is providerList:',providerList)
  }
  const handleOnClick =() =>{
    setProviderList((pl)=>pl=[...providerList, providerItem])
    console.log('this is providerList:',providerList)
  }
  const handleDelete =() =>{
    
  }
  
    return (
        <div>
        <nav>
          <Header />
        </nav>
        <div className="p_CN_tiles_container">
          <div className="p_CN_greeting">
            <h1>{`Session Follow Up`}</h1>
          </div>
          <div className="p_CN_intro_text p_CN_tile">
            <h2>Assignments</h2>
            <div className='p_CN_Assignment_adder provider_input'>
              <input onChange={(e) => handleChange(e)} type="text" placeholder="Create Items Here..."></input>
            </div>
            <div className='p_CN_Assignment_adder provider_btnContainer'>
              <button onClick={handleOnClick}><h3>Add Assignment</h3></button>
            </div>
            <div className='p_CN_Assignment_adder client_btnContainer'>
            <select className='client_select'>
              <option value='client 1'>Client 1</option>
              <option value='client 1'>Client 2</option>
              <option value='client 1'>Client 3</option>
              <option value='client 1'>Client 4</option>
              <option value='client 1'>Client 5</option>
            </select>
            </div>
            <div className='p_CN_Assignment_adder client'>
              <button><h3>Remove All</h3></button>
              <button><h3>Send to Client</h3></button>
            </div>
            <div className='p_CN_Assignment_display'>
             
             {providerList.map((e)=>
             {return <table className = 'assignments'>
               <tr>
                 <>{e}</>
                 <td><button className='Edit'>Edit</button></td>
                 <td><button className='delete'>Delete</button></td>
             </tr>
             </table>
             })}
            </div>
            <div className='p_CN_Assignment_display client'></div>
          </div>
         
        </div>
      </div>
    );
  }

export default Notes;