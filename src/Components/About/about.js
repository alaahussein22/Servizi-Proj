import React from 'react';
import './about.css';
import ConstructionIcon from '@mui/icons-material/Construction';
import man_img from '../../assets/pexels-pixabay-220453.jpg';
import girl_img from '../../assets/pexels-tuấn-kiệt-jr-1382731.jpg';
import StarIcon from '@mui/icons-material/Star';


const About = () => {
    return <>


<div className="bbb">
 <section className="about container">
 <div className="row">

        <div className="lorem col-md-4 ">
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
{/* //////////////////////////////////////////////// */}



<div className="www">
<section className="work container">
 <div className="row ">

        <div className="hour col-md-4">
            <h5>+130k</h5>
            <p>Hours of Work</p>
           </div>

    <div className="hour col-md-4">
       <h5>+200</h5>
            <p>Available Repairman</p>
        </div>

  <div className="hour col-md-4">
            <h5>+300</h5>
            <p>Work Completed</p>
    </div>

</div>
 </section>
</div>


{/* ///////////////////////////////////////////////// */}


<section className="client container">
 <div className="row ">

<h2>Clients Feedback</h2>
        <div className="feedback col-md-5">
        <span className="d-flex group">
           <img src={man_img} alt="man" width={80} height={80} />
            <h5>Lorem ipsum</h5>
            <span className="icon ms-3">
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            </span>
        </span>
            <p>lorem Ipsum dolor sit amet,consect adipiscing 
               elit, sed diam pulvinar lorem pulvinar
               pulvinar lorem
               </p>
           </div>

    <div className="feedback two col-md-5">
    <span className="d-flex group">
          <img src={girl_img} alt="girl" width={80} height={80}/>
            <h5>Lorem ipsum</h5>
           <span className="icon ms-4">
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            <StarIcon color='success'/>
            </span>
    </span>

            <p>lorem Ipsum dolor sit amet,consect adipiscing 
               elit, sed diam pulvinar lorem pulvinar
               pulvinar lorem
               </p>

             
        </div>


</div>
 </section>







    </>;
}

export default About;