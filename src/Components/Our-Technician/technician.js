import React from 'react'
import img from '../../assets/plumb.png'
import img2 from '../../assets/product-kit 2.png'
import img3 from '../../assets/men.png'
import img4 from '../../assets/guide.png'
import img5 from '../../assets/blackstar.png'
import img6 from '../../assets/greenstar.png'
import location from '../../assets/location.png'
import time from '../../assets/time2.png'


import ConstructionIcon from '@mui/icons-material/Construction';
import './technician.css'
import {Link} from 'react-router-dom'

export default function Technician() {
  return (
    <div>
    
   
<div className="sss">

<section className="service container">
     <div className="row">

<div className="worker col-md-7">
    <h2>Plumbing Services</h2>
    <p>We Work to ensure people comfort at their home, and to provide<br/>
    the best user experience that you will love.
    </p>


<div className="warning">
  <button className='btn btn-pink'>Contact Us</button>
</div>

<section className="d-flex p-3 tech">

<span className="hour col-md-5">
      <h5>+80</h5>
      <p>Available Electrician</p>
</span>

<span className="hour col-md-5">
      <h5>+20k</h5>
      <p> Electrical Work Completed</p>
</span>
</section>
</div>


<div className='img_Serv col-md-5'>
<img src={img} alt='worker' width='541px' height='500px'/>
</div>

  </div> 

</section> 
 </div>


{/* /////////////////////////////////////////////////// */}


<h3 className="head"><img src={img2} width="60" height="60" alt=""/>Our Handyman</h3>

<section className="tech-type container">

<div className="row">
     <div className=" first">

     <div className="dropdown col-md-5">
       <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Location
       </button>
       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><Link className="dropdown-item" to="#">Action</Link></li>
           <li><Link className="dropdown-item" to="#">Another action</Link></li>
           <li><Link className="dropdown-item" to="#">Something else here</Link></li>
       </ul>
       </div>
     
     </div>


<div className="first">
     <div className="dropdown col-md-5">
       <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         Sort By
       </button>
       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><Link className="dropdown-item" to="#">Action</Link></li>
           <li><Link className="dropdown-item" to="#">Another action</Link></li>
           <li><Link className="dropdown-item" to="#">Something else here</Link></li>
       </ul>
       </div>

</div> 

     <div className="col-md-2 second">
         <h5>Filter </h5>
     </div>

</div>
</section>


<div className="ccc">
<section className="all-tech container">
<div className="row">

<div className="profileT col-md-3">

<section className="prof d-flex m-3 p-1">

<span className="">
     <img src={img3} alt="" width={100} height={100}/>
</span>

<span className="ms-3">
  <h5 className="mb-3">Lorem ipsum</h5>
  <p><img src={img4} alt="" width={15} height={15}/>Plumber</p>
  <p className="m-2">
    <img src={img5} alt="" width={15} height={15}/>
     <img src={img6} alt="" width={15} height={15}/> 
  </p>
</span>
    
    
</section>

<hr style={{color: '#566573',border: '1px solid #566573'}}></hr>

<div className="loc d-flex m-3 p-1">
<section >
   <span>
       <img src={location} alt="" width={15} height={15}/>
       Giza,Egypt
   </span>
   <br></br>
   <span className="mb-2">
       <img src={time} alt="" width={15} height={15}/>
         5 months ago
   </span>
</section>

<section className="tecBtn">
    <button className="btn btn-pink">Contact Now</button>
</section>

</div>
     </div>


 <div className="profileT col-md-3">

<section className="prof d-flex m-3 p-1">

<span className="">
     <img src={img3} alt="" width={100} height={100}/>
</span>

<span className="ms-3">
  <h5 className="mb-3">Lorem ipsum</h5>
  <p><img src={img4} alt="" width={15} height={15}/>Plumber</p>
  <p className="m-2">
    <img src={img5} alt="" width={15} height={15}/>
     <img src={img6} alt="" width={15} height={15}/> 
  </p>
</span>
    
    
</section>

<hr style={{color: '#566573',border: '1px solid #566573'}}></hr>

<div className="loc d-flex m-3 p-1">
<section >
   <span>
       <img src={location} alt="" width={15} height={15}/>
       Giza,Egypt
   </span>
   <br></br>
   <span className="mb-2">
       <img src={time} alt="" width={15} height={15}/>
         5 months ago
   </span>
</section>

<section className="tecBtn">
    <button className="btn btn-pink">Contact Now</button>
</section>

</div>
     </div>



     <div className="profileT col-md-3">

<section className="prof d-flex m-3 p-1">

<span className="">
     <img src={img3} alt="" width={100} height={100}/>
</span>

<span className="ms-3">
  <h5 className="mb-3">Lorem ipsum</h5>
  <p><img src={img4} alt="" width={15} height={15}/>Plumber</p>
  <p className="m-2">
    <img src={img5} alt="" width={15} height={15}/>
     <img src={img6} alt="" width={15} height={15}/> 
  </p>
</span>
    
    
</section>

<hr style={{color: '#566573',border: '1px solid #566573'}}></hr>

<div className="loc d-flex m-3 p-1">
<section >
   <span>
       <img src={location} alt="" width={15} height={15}/>
       Giza,Egypt
   </span>
   <br></br>
   <span className="mb-2">
       <img src={time} alt="" width={15} height={15}/>
         5 months ago
   </span>
</section>

<section className="tecBtn">
    <button className="btn btn-pink">Contact Now</button>
</section>

</div>
     </div>

</div>
</section>

</div>
    
    </div>
  )
}
