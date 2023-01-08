import NavbarComponent from './component/NavbarContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CarRouter from './routerpages/CarRouter';


function App() {

  return (
   <div className="">
 
 
  
    
   <Router>
   <NavbarComponent />
    
        <Routes>
         <Route  path="/" element={<CarRouter />}/>
        </Routes>
    </Router>
  
   </div>
  
  )
}

export default App;
