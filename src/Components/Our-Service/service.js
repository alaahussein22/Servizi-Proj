import React from 'react'
import './service.css'
import {Link} from 'react-router-dom'
import img from '../../assets/service.png'
import ConstructionIcon from '@mui/icons-material/Construction';

const Service=()=> {
  return (
<>

<div className="sss">

   <section className="service container">
        <div className="row">

<div className="worker col-md-7">
 <h2>Our Services</h2>
 <p>We Work to ensure people comfort at their home, and to provide<br/>
    the best user experience that you will love.
  </p>


<div className="warning">
 <button className='btn btn-pink'>Contact Us</button>
</div>
 </div>


<div className='img_Serv col-md-5'>
<img src={img} alt='worker' width='550px' height='500px'/>
</div>

     </div> 

</section> 
    </div>


{/* /////////////////////////////////////////////////// */}


<div className="ccc">
 <section className="all-serv container">
 <div className="row">


        <div className="lorem col-md-4 ">
        <span> <ConstructionIcon /> </span>
            <Link to='/tech' ><h5>Lorem ipsum</h5></Link>
            <p>lorem Ipsum dolor sit amet,
             consect adipiscing elit, 
             sed diam pulvinar lorem ,
             lector matchers lector adipiscing matchers</p>
           </div>


    <div className="lorem col-md-4">
    <span> <ConstructionIcon /> </span>

    <h5>Lorem ipsum</h5>
            <p>lorem Ipsum dolor sit amet,
             consect adipiscing elit, 
             sed diam pulvinar lorem ,
             lector matchers lector adipiscing matchers</p>
        </div>

  <div className="lorem col-md-4">
  <span> <ConstructionIcon /> </span>

  <h5>Lorem ipsum</h5>
            <p>lorem Ipsum dolor sit amet,
             consect adipiscing elit, 
             sed diam pulvinar lorem ,
             lector matchers lector adipiscing matchers</p>
    </div>

</div>
 </section>

</div>







</>
  )
}


export default Service;