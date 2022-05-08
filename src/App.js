import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar'
import Service from './Components/Our-Service/service';
import UserSignIN from './Components/User-Register/SignIN'
import Footer from './Components/Footer/footer'
import UserSignUP from './Components/User-Register/SignUP';
import Contact from './Components/Contact-Us/contact'
import Technician from './Components/Our-Technician/technician';

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
         <Route path="/contact" element={<Contact />} />

         
         <Route path="**"  element={<Home />}/>
    </Routes>

<Footer />
</div>
</BrowserRouter>
    </>
  );
}

export default App;
