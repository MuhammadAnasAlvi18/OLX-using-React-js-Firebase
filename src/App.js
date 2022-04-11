import "./App.css";
import Sell from "./Components/Sell";
import Main from "./Components/Main";
import AddCards from "./Components/AddCards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/sell" element={<Sell />}/>
        <Route index path="/" element={<Main />}/>
        <Route index path="/sell/attributes" element={<AddCards />}/> 
      </Routes>
    </Router>
  );
}

export default App;
