import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'; 

import Halu from './Components/Halu';
import First from './Components/First';
import Second from './Components/Second';
import Food from './Pages/Food';
import Drink from './Pages/Drink';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Halu />} />
        <Route path="/home" element={<First />} />        
        <Route path="/about" element={<Second />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drink" element={<Drink />} />
        
        
      </Routes>
    </Router>
  )

}

export default App;
