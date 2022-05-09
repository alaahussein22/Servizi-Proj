import React from 'react';
import '../User-Register/register.css'
import {Link} from 'react-router-dom'
import img from '../../assets/IMG-20220427-WA0013.jpg'


const TechSignIN = () => {
    return <div className="ggg">
 
    <div className="user_register container">
   <div className="row">
   
   <section className="userSignIn  col-md-6" style={{height:'450px'}}>
   
         <h2>Technician SignIn</h2>
   
   <div className="col-md-8 u-sign">
       <input type="text" className="form-control" id="validationCustom05" placeholder="Phone Number" required />
       <div className="invalid-feedback">
         Please provide a valid Id.
       </div>
     </div>
   
     <div className="col-md-8 u-sign">
       <input type='password' className="form-control" id="validationCustom01" placeholder='Password' required />
       <div className="valid-feedback">
         Looks good!
       </div>
     </div>
   
     <div className="col-md-1">
       <button className="btn btn-primary form-control u-signBtn "
        type="submit">SIGN IN</button>
     </div>
   
   <Link to='/techUp'>
     <h4 className="para col-md-3" style={{color:'#566573',fontSize:'18px'}}>
     Create Account</h4>
     </Link>
  
   </section>
   
   
   <div className="col-md-6 pho">
     <img alt="user" src={img} width={636} height={560}/>
   </div>
   
   </div>
   </div>
   
       </div>;
}



export default TechSignIN;