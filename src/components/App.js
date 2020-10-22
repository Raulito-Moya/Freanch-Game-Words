import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'  //se importa el Route
import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExercisesNew'
import NotFound from '../pages/NotFound'

const App=()=>
     (
        <BrowserRouter>
        <Switch>
           <Route exact path="/exercise" component={Exercises}/>
           <Route exact path="/exercise/new" component={ExercisesNew}/>
           <Route component={NotFound}/>
        </Switch>
         
        </BrowserRouter>
     )

/*function App(){
     return (
         <BrowserRouter>
         <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/new" component={ExercisesNew}/>
            <Route component={NotFound}/>
         </Switch>
          
         </BrowserRouter>
     )
}*/

export default App