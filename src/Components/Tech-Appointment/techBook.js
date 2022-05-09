import React from 'react';
import img3 from '../../assets/men.png'
import './techBook.css'

const TechBook = () => {
    return <div>
    
    
<div className="ppp">
    <section className="tecProf container">
    <div className="row">

    <div className="TecProfile col-md-7">

    <section className="prof d-flex m-3 p-3" style={{color: 'black'}}>

    <span>
        <img src={img3} alt="" width={150} height={150}/>
    </span>

    <span className="ms-3">
    <h3 className="mb-3">Lorem ipsum</h3>
    <p>Plumber</p>
    </span>
        
    </section>

        </div>


<div className="TecProfile col-md-7" style={{backgroundColor:'#AEB6BF'}}>

    <section className="prof m-3 p-3" style={{color: 'black'}}>
          <h4 className="mb-4">Specify Appointment</h4>
    <div class="row g-3">
  <div class="col">
    <input type="date" class="form-control" placeholder="Date" 
    aria-label="First name"  style={{borderRadius:'15px',padding:'10px'}}/>
  </div>
  <div class="col">
    <input type="time" class="form-control" placeholder="Time"
     aria-label="Last name"  style={{borderRadius:'15px',padding:'10px'}}/>
  </div>
</div>
        
    </section>

    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" 
  placeholder="name@example.com" style={{borderRadius:'15px'}}/>
  <label for="floatingInput">Address</label>
</div>

    <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here"
   id="floatingTextarea2" style={{height: '100px',borderRadius:'15px'}}></textarea>
  <label for="floatingTextarea2">Description</label>
</div>

<button type="button" className="btn btn-secondary"
  style={{borderRadius:'15px',margin:'30px 150px'}}>Cancel</button>
<button type="button" className="btn btn-primary"
   style={{borderRadius:'15px',margin:'30px 90px'}}>Book</button>

</div>





    </div>
    </section>

</div>




    </div>;
}


export default TechBook;