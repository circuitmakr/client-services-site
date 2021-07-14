import React from 'react';
import{Switch, Route} from 'react-router-dom';
import C_Intake from './Components/Client/C_Intake';
import C_Quiz from './Components/Client/C_Quiz';
import C_Dashboard from './Components/Client/C_Dashboard'
import C_Progress from './Components/Client/C_Progress'
import Login from './Components/Login';
import C_Schedule from './Components/Client/C_Schedule';
import C_Notes from './Components/Client/C_Notes';
import C_History from './Components/Client/C_History';
import P_Dashboard from './Components/Provider/P_Dashboard';
import P_Progress from './Components/Provider/P_Review';
import P_Profile from './Components/Provider/P_Client_Profile';
import P_Schedule from './Components/Provider/P_Schedule';
import P_Notes from './Components/Provider/P_Notes';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/c_dashboard' component={C_Dashboard} />
        <Route path='/c_schedule' component={C_Schedule} />
        <Route path='/c_notes' component={C_Notes} />
        <Route path='/c_Intake' component={C_Intake} />
        <Route path='/c_quiz' component={C_Quiz} />
        <Route path='/c_history' component={C_History} />
        <Route path='/c_progress' component={C_Progress} />
        <Route path='/provider/dashboard' component={P_Dashboard} />
        <Route path='/provider/calendar' component={P_Schedule} />
        <Route path='/provider/assignments' component={P_Notes} />
        <Route path='/provider/client_profiles' component={P_Profile} />
        <Route path='/provider/client_progress' component={P_Progress} />
    </Switch>
);