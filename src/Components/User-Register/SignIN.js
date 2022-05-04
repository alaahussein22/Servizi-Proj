import React from 'react';
import './register.css'

const UserSignIN = () => {
    return <div>

<section className="userSignIn">
      <h2>User SignIn</h2>

<div className="col-md-6 u-sign">
    <input type="text" className="form-control" id="validationCustom05" placeholder="Phone Number" required />
    <div className="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>

  <div className="col-md-6 u-sign">
    <input type='password' className="form-control" id="validationCustom01" placeholder='Password' required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-1 ">
    <button className="btn btn-primary form-control u-signBtn " type="submit">SIGN IN</button>
  </div>
</section>

    </div>;
}



export default UserSignIN;