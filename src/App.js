import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Components/Home/home';

function App() {
  return (
    <Router>
    <div className="App">
     
     <Home />
    
 <Routes>
      <Route path="/home" exact component={Home} />
      {/* <Route path="/service" exact component={Home} /> */}

      {/* <Route path="/about" exact component={Home} /> */}

</Routes>

    </div>
    </Router>
  );
}

export default App;
