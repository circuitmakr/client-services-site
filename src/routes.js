import React from 'react';
import{Switch, Route} from 'react-router-dom';
import c_Dashboard from './Components/c_Dashboard';
import p_Dashboard from './Components/p_Dashboard';
import c_Intake from './Components/c_Intake';

export default(
    <Switch>
        {/* Client Side */}
        <Route exact path= "/" component={c_Dashboard}/>
        <Route path= "./Components/c_Dashboard" component={c_Dashboard}/>
        <Route path= "./Components/c_Intake" component={c_Intake}/>
        
        {/* Provider Side */}
        <Route exact path= "/" component={p_Dashboard}/>
        <Route path="./Components/p_Dashboard" component={p_Dashboard} />
    </Switch>
);