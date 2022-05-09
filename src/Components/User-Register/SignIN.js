import React from 'react';
import './register.css'
import {Link} from 'react-router-dom'
import img from '../../assets/istockphoto-1312133528-170667a.jpg'

const UserSignIN = () => {

    return <div className="ggg">
 
 <div className="user_register container">
<div className="row">

<section className="userSignIn  col-md-6">

      <h2>User SignIn</h2>

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

<Link to='/userUp'>
  <h4 className="para col-md-3" style={{color:'#566573',fontSize:'18px'}}>
  Create Account</h4>
  </Link>

<hr style={{color:'#566573', border: '1px solid #566573',margin: '15px'}}></hr>
  <h5 className="center">OR</h5>
  <div className="col-md-6">
 
 <Link to='/techReg'>
    <button type="text" className="btn btn-primary tecBt">
       Sign In As Technician</button>
</Link>
  </div>
</section>


<div className="col-md-6 pho">
  <img alt="user" src={img} width={636} height={600}/>
</div>

</div>
</div>

    </div>;
}



export default UserSignIN;