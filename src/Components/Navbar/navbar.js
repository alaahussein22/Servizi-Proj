import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar =()=> {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" 
       style={{backgroundColor:'#000080'}}>
    <div className="container">
      <Link className="navbar-brand" to="#" style={{color:'#FFB233',fontWeight:'bold',fontSize:'30px'}}>Servizi</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
       
        <form className="d-flex">
        <ul className="navbar-nav me-auto mb-3 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" 
            style={{color:'white',fontSize:'17px',borderBottom:'3px solid #FFB233'}} 
            aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" exact to="/service" 
            style={{color:'white',fontSize:'17px'}}>Our Service</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to="/contact" 
            style={{color:'white',fontSize:'17px'}}>Contact Us</Link>
          </li>
        </ul>
        <Link to="/userReg">
          <button className="btn btn-primary ms-2" 
          style={{width:'100px',borderRadius:'17px',padding:'5px',fontSize:'20px'}}  
          type="submit">Log In</button>
          </Link>
        </form>
      </div>
    {/* </div> */}
  </nav></div>
  )
}


export default Navbar;