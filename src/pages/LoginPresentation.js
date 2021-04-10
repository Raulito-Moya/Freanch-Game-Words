import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import { LoginScreen } from '../components/Login/LoginScreen';
import { SignUpLogin } from '../components/Login/SignUpLogin';

export const LoginPresentation = ({location}) => {

  const {pathname} = location;


return(
    <div className="container">
       <header className="row">
            <h1>Aprende Frances con solo 5 palabras al dia  y diviertate!!</h1>
       </header>
       
       {
       (pathname !== '/loginIntro/login' && pathname !== '/loginIntro/register') 
         &&
       (<form className="row">
          <Link className="btn btn-primary" to='/loginIntro/login'>Sign In</Link>
          <Link className="btn btn-dark" to="/loginIntro/register">Sign Up</Link>
       </form>)
        }
       <Switch>
        <Route exact path="/loginIntro/login" component={LoginScreen}/>
        <Route exact path="/loginIntro/register" component={SignUpLogin}/>

       </Switch>
    </div>
)

}