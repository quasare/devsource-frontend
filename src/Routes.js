import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import LanugageList from './Components/Language/LanguageList';
import Profile from './Components/User/Proflie';
import Language from './Components/Language/Language';
import Resource from './Components/Resource/Resource';
import NewResource from './Components/Resource/NewResource';
import Login from './Login';
import PrivateRoute from './PrivateRoute'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <PrivateRoute exact path='/languages'>
                <LanugageList/>
            </PrivateRoute>
            <PrivateRoute exact path='/languages/:name'>
                <Language/>
            </PrivateRoute>
            <PrivateRoute exact path='/languages/:name/resource/:id'>
                <Resource />
            </PrivateRoute>
            <PrivateRoute exact path='/add-resource/:lang'>
                <NewResource />
            </PrivateRoute>
            
            <PrivateRoute exact path='/profile'>
                <Profile />
            </PrivateRoute>
            
            <Route exact path='/login'>
                <Login />
            </Route>
        </Switch>
    )
}
