import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar'
import Service from './Components/Our-Service/service';
import UserSignIN from './Components/User-Register/SignIN'
import Footer from './Components/Footer/footer'
import UserSignUP from './Components/User-Register/SignUP';
import Contact from './Components/Contact-Us/contact'
import Technician from './Components/Our-Technician/technician';
import TechSignIN from './Components/Tech-Register/SignIN'
import TechSignUP from './Components/Tech-Register/SignUP'
import TechProfile from './Components/Technician-Profile/techProf'
import TechBook from './Components/Tech-Appointment/techBook'

function App() {
  return (
    <>
    <BrowserRouter>

  <div className="App">
       <Navbar />
     
    <Routes>
         <Route path="/"  element={<Home />} />
         <Route path="/home"  element={<Home />} />
         <Route path="/service"  element={<Service />} />
         <Route path="/tech" element={<Technician />} />
         <Route path="/userReg"  element={<UserSignIN />} />
         <Route path="/userUp" element={<UserSignUP />} />
         <Route path="/techReg"  element={<TechSignIN />} />
         <Route path="/techUp"  element={<TechSignUP />} />
         <Route path="/techProfile" element={<TechProfile />} />
         <Route path="/techBook" element={<TechBook />} />

          <Route path="/contact" element={<Contact />} />


              <Route path="**" element={<Home />} />
            </Routes>
            <Footer />
</div>
</BrowserRouter>
    </>
  );
}

export default App;
