import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Info from './Pages/Info.tsx';
import Plan from './Pages/Plan.tsx';
import Add from './Pages/Add.tsx';
import Summary from './Pages/Summary';

function App() {
 return (

   <Router>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/info" />} />
          <Route path="/info" element={<Info />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/add" element={<Add />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
        </>
    </Router>
    
  )
}

export default App
