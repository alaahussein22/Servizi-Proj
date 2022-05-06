import React from 'react';
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    return <div>

<footer className="footer ">
<div className="row container">

<div className="col-md-3 left">
   <h2>Servizi</h2>
   <span className="d-flex">
    <FacebookIcon/>
    <TwitterIcon />
    <YouTubeIcon />
   </span>
</div>

<div className="col-md-3 right">
   <h3>Quick Links</h3>
   <ul>
       <li>Home</li>
       <li>Our Service</li>
       <li>Guide Videos</li>
       <li>About Us</li>

   </ul>
</div>


<div className="col-md-3 right">
   <h3>Useful Links</h3>
   <ul>
       <li>FAQ`s</li>
       <li>Terms and Condition</li>
       <li>Privacy Policy</li>

   </ul>
</div>

<div className="col-md-3 right">
   <h3>Contact</h3>
   <ul>
       <li><PhoneIcon />+123 4456 01234</li>
       <li><FmdGoodIcon />Giza,Egypt</li>
       <li><MailIcon />Servizi@gmail.com</li>

   </ul>
</div>

<p className="copy">&copy;Copyrights 2022 by Servizi</p>
</div>
</footer>
    </div>;
}



export default Footer;