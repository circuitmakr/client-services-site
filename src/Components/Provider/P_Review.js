import React from 'react';
import Header from './P_Header'
import './P_Review.css'

function Review(){
    return (
        <div>
        <nav>
          <Header />
        </nav>
        <div className="p_CR_tiles_container">
          <div className="p_CR_greeting">
            <h1>{`Hello`}</h1>
          </div>
          <div className="p_CR_intro_text p_CR_tile">
            <h2>Upcoming Appointments</h2>
          </div>
          <div className="p_CR_tile">
            <h2>Availability Calendar</h2>
          </div>
          <div className="p_CR_tile">
            <h2>Assignments</h2>
          </div>
          <div className="p_CR_tile">
            <h2>Session Reviews</h2>
          </div>
        </div>
      </div>
    );
  }
export default Review;