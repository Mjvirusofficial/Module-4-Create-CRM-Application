// import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {


  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand custom-header" id='name' to="/">Navbar</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
    <NavLink className=" nav-link active" to="/">Home</NavLink>

      <ul className="navbar-nav ms-auto">
 
         {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li> */}

        {/*
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/form"><span className=''>Form</span></NavLink>
        </li> */}
       
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signup"><span className='btn btn-success'>Logout</span></NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link active " aria-current="page" to="/signin"><span className='btn btn-primary'>Signin</span></NavLink>
        </li> */}
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar