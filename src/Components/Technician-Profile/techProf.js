import React from 'react';
import img3 from '../../assets/men.png'
import img6 from '../../assets/greenstar.png'
import './techProf.css'
import {Link} from 'react-router-dom'

const TechProfile = () => {
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
    <p className="m-2">
        <img src={img6} alt="" width={15} height={15}/> 
    </p>
    </span>
        

    <Link to='/techBook' >  
    <section className="tecBtn">
        <button className="btn btn-pink" 
        style={{fontSize:'20px',fontWeight:'bold'}}>Book</button>
    </section>
</Link> 

    </section>

        </div>


<section className="review col-md-7">
   <h2>Reviews</h2>
<div className="col-md-10">
   <img src={img6} alt="" width={15} height={15}/>
   <img src={img6} alt="" width={15} height={15}/>
   <img src={img6} alt="" width={15} height={15}/>

   <h5>Seif Ali</h5>
   <p>this is a very helpful worker.</p>
</div>


<div className="col-md-10">
   <img src={img6} alt="" width={15} height={15}/>
   <img src={img6} alt="" width={15} height={15}/>
   <img src={img6} alt="" width={15} height={15}/>

   <h5>Asmaa Hossam</h5>
   <p>this is a very helpful worker.</p>
</div>


<div className="col-md-10">
   <img src={img6} alt="" width={15} height={15}/>
   <img src={img6} alt="" width={15} height={15}/>
   <img src={img6} alt="" width={15} height={15}/>

   <h5>Salah Hassan</h5>
   <p>this is a very helpful worker.</p>
</div>
</section>


    </div>
    </section>

</div>

    </div>;
}

export default TechProfile;