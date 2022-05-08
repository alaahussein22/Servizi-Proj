import React from 'react';

const Contact = () => {
    return <div>
        <div className="con">

<div className="user_register container">
<div className="row">

<form className="row g-3 col-md-7 needs-validation" noValidate>

<section className="row g-3 needs-validation section" style={{padding:'25px',margin:'30px 200px'}} noValidate>
<h3 style={{margin:' 20px 0',color:'#566573',textAlign:'center'}}>Hi, I Hope Find You Well! </h3>

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
      <input type="text" className="form-control" id="validationCustomUsername" 
      placeholder='Email'
       aria-describedby="inputGroupPrepend" required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
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
    <input type="text" className="form-control" id="validationCustom05" placeholder="Phone" required />
    <div className="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>
 

  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" 
  id="floatingTextarea2" style={{height: '100px'}}></textarea>
  <label for="floatingTextarea2">Leave your message here</label>
</div>

  <div className="col-md-12 mt-4">
    <button className="btn btn-purple form-control sign" type="submit">Send</button>
  </div>

</section>

</form>



</div>
</div>
</div>

   

    </div>;
}



export default Contact;