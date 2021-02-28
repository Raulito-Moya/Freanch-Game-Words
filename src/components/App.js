import React from 'react'
import {BrowserRouter,Route,Switch ,Redirect} from 'react-router-dom'
import Presentacion from '../pages/Presentacion'
import NotFound from '../pages/NotFound.js'
import Jugar from '../pages/Jugar.js'
import Historia from '../pages/historia.js'
import {NavBar} from './NavBar'

const App=()=>(
    

    <>
   
    <BrowserRouter> 
    <NavBar />

    <Switch>
       <Route exact path="/" component={Presentacion}/> 
       <Route exact path="/presentacion/aprenderpalabras" component={Jugar}/>
       <Route exact path="/presentacion/historia" component={Historia}/>
       <Redirect exact component={NotFound}/>
    </Switch>
    </BrowserRouter>
    
    </>
)

export default App