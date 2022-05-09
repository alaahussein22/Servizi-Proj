import React from 'react';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import img from '../../assets/man desgin landing page.png';
import {Link} from 'react-router-dom'
 import CarpenterIcon from '@mui/icons-material/Carpenter';
 import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
 import PlumbingIcon from '@mui/icons-material/Plumbing';
 import FormatPaintIcon from '@mui/icons-material/FormatPaint';
 import HvacIcon from '@mui/icons-material/Hvac';
 import CarRentalIcon from '@mui/icons-material/CarRental';

const Header = () => {
    return <div className='hhh'>
     <header className="servH container">
     <div className="row ">

       <div className=" house  col-md-8">
        <h2>Best Solution for<br/>
            Every House Problems
        </h2>
        <p>We Work to ensure people comfort at their home, and to provide<br/>
           the best user experience that you will love.
         </p>
         <p>Hire your Handyman</p>

         <section className="service-type d-flex">
              <div className="col-md-5 first">

              <div className="dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   Service Type
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item mb-1" to="/tech">
                     <CarpenterIcon />Carpenter</Link></li>
                    <li><Link className="dropdown-item mb-1" to="#">
                     <PlumbingIcon/> Plumber</Link></li>
                    <li><Link className="dropdown-item mb-1" to="#">
                     <ElectricBoltIcon/> Electrician</Link></li>
                    <li><Link className="dropdown-item mb-1" to="#">
                     <FormatPaintIcon/> Painting Work</Link></li>
                    <li><Link className="dropdown-item mb-1" to="#">
                     <CarRentalIcon />Car Mechanic</Link></li>
                    <li><Link className="dropdown-item" to="#">
                     <HvacIcon /> Air Conditioning</Link></li>
                </ul>
                </div>


              </div>

              <div className="col-md-5 second">
                  <h5>Search <span> <SearchIcon /> </span></h5>
              </div>
         </section>

        </div>


<div className='photo col-md-4'>
  <img src={img} alt='worker' width='400' height='400'/>
</div>
     
     </div> 

     </header>

      </div>;
}


export default Header;