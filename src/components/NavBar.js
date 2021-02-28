import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {

    return <div>
       
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top"/>
       Presentacion
    </Link>
    <Link class="navbar-brand" to="/presentacion/aprenderpalabras">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top"/>
       Juego
    </Link>
    <Link class="navbar-brand" to="/presentacion/historia">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top"/>
      Historia de Francia
    </Link>
  </div>
</nav>
    </div>




}