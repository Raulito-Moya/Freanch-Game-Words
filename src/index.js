import React from 'react';
import ReactDOM from 'react-dom';

/*const user={
    firstName:'Raul',
    lastName:'Alejandro',
    avatar:'./images/watch2.jpg'
}

function getName(user){
    return`${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
     return   <h1>Hello React ...{getName(user)}</h1>
    }
    return <h1>Hello stranger</h1>
} 

const name="Raul"
const element=(<div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
</div>)*/

import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'
const container=document.getElementById("app")


ReactDOM.render(<App/>,container);
