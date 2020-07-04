import React from 'react'
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from './components/pages/index'
import Songinfo from './components/pages/songinfo'

export default ()=>{
  return(
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/song/:songid" component={Songinfo} />
        <Redirect path='*' to='/index'/>
      </Switch>
  )
}