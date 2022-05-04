import UserSignIN from './Components/User-Register/SignIN';
import UserSignUP from './Components/User-Register/SignUP'
import TechSignIN from './Components/Tech-Register/SignIN';
import TechSignUP from './Components/Tech-Register/SignUP'

function App() {
  return (
    <div className="App">
     
     <UserSignUP />
     <UserSignIN />
     <TechSignIN />
     <TechSignUP />
    </div>
  );
}

export default App;
