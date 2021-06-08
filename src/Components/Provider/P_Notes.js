import React from 'react';
import Header from './P_Header'
import './P_Notes.css'

function Notes(){
    return (
        <div>
        <nav>
          <Header />
        </nav>
        <div className="p_CN_tiles_container">
          <div className="p_CN_greeting">
            <h1>{`Hello`}</h1>
          </div>
          <div className="p_CN_intro_text p_CN_tile">
            <h2>Assignments</h2>
            <div className='p_CN_Assignment_adder'>
            </div>
            <div className='p_CN_Assignment_adder client'>
            </div>
            <div className='p_CN_Assignment_display'></div>
            <div className='p_CN_Assignment_display client'></div>
          </div>
         
        </div>
      </div>
    );
  }

export default Notes;