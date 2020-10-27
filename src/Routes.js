import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import LanugageList from './Components/Language/LanguageList';
import Profile from './Components/User/Proflie'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/Languages'>
                <LanugageList/>
            </Route>
            <Route exact path='/Proflie'>
                <Profile />
            </Route>
        </Switch>
    )
}
