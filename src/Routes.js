import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import LanugageList from './Components/Language/LanguageList';
import Profile from './Components/User/Proflie';
import LanguageCard from './Components/Language/LanguageCard'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/languages'>
                <LanugageList/>
            </Route>
            <Route exact path='/languages/:name'>
                <LanguageCard/>
            </Route>
            <Route exact path='/proflie'>
                <Profile />
            </Route>
        </Switch>
    )
}
