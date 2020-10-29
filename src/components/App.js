import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Presentacion from '../pages/Presentacion'
import NotFound from '../pages/NotFound.js'
import Jugar from '../pages/Jugar.js'

const App=()=>(
    <BrowserRouter>
    <Switch>
       <Route exact path="/presentacion" component={Presentacion}/> 
       <Route exact path="/presentacion/aprenderpalabras" component={Jugar}/>
       <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
)

export default App