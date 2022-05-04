import React from 'react';
import image from '../../assets/IMG-20220427-WA0013.jpg'
import '../User-Register/register.css';

export default function TechSignUP() {
  return (
    <>

<div className="container row par">

<form className="row g-3 col-md-7 needs-validation" noValidate>

<section className="row g-3 needs-validation section" noValidate>
<h2>Technical SignUp</h2>
  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom01" placeholder='First Name' required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom02" placeholder='Last Name'  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className="col-md-12">
    <div className="input-group has-validation">
      <input type="text" className="form-control" id="validationCustomUsername" placeholder='Email'
       aria-describedby="inputGroupPrepend" required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <input type='password' className="form-control" id="validationCustom01" placeholder='Password' required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-6">
    <input type="password" className="form-control" id="validationCustom01" placeholder='Confirm Password' required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-6">
    <select className="form-select" id="validationCustom04" placeholder="City" required>
      <option selected disabled value="">City</option>
      <option>Cairo</option>
      <option>Alexandria</option>
      <option>Banha</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid City.
    </div>
  </div>

  <div className="col-md-6">
    <select className="form-select" id="validationCustom04" placeholder="Governorate" required>
      <option selected disabled value="">Governorate</option>
      <option>Egypt</option>
      <option>Egypt</option>
      <option>Egypt</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>


  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom05" placeholder="National Id" required />
    <div className="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>

  <div className="col-md-6">
    <select className="form-select" id="validationCustom05" placeholder="Profession" required>
      <option selected disabled value="">Profession</option>
      <option>...</option>
   
    </select>
    <div className="invalid-feedback">
      Please select a valid Profession.
    </div>
  </div>

  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom05" placeholder="Phone" required />
    <div className="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom05" placeholder="Age" required />
    <div className="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>

  <div className="col-md-12">
    <button className="btn btn-purple form-control sign" type="submit">Sign Up</button>
  </div>

</section>


  <h5 className="center">OR</h5>

  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom05" placeholder="Sign Up with Google" required />
    <div className="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="validationCustom05" placeholder="Sign Up with Facebook" required />
    <div className="invalid-feedback">
   
    </div>
  </div>

<p className="center"> Already a Member? <span></span>
<span style={{color:'purple',cursor:'pointer'}}>Sign in</span></p>

</form>

<div className="col-md-5 photo">
  {/* <h3 className='center txt'>Join Our Family</h3>
  <p className='center txt'>lorem ipsum dolor sit amet, consectetur adipiscing,<br/>
           consectetur adipiscing</p> */}
  <img src={image} width="590" height="650" alt='img'/>
</div>

</div>

    </>
  )
}
