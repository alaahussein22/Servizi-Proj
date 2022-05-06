import React from 'react';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import img from '../../assets/pexels-pavel-chernonogov-2381463.jpg'

const Header = () => {
    return <div>
     <header className="servH ">
     <div className="row container">

       <div className=" house  col-md-9">
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
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
              </div>

              <div className="col-md-5 second">
                  <h5>Search <span> <SearchIcon /> </span></h5>
              </div>
         </section>

        </div>


<div className='photo col-md-3'>
  <img src={img} alt='worker' width='380' height='380'/>
</div>
     
     </div> 

     </header>

      </div>;
}


export default Header;