import "./App.css";
import Sell from "./Components/Sell";
import Main from "./Components/Main";
import AddCards from "./Components/AddCards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainTwo from "./Components/MainTwo";
import CardDetail from "./Components/CardDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/sell" element={<Sell />}/>
        <Route index path="/" element={<Main />}/>
        <Route index path="/sell/attributes" element={<AddCards />}/>
        <Route index path="/item/:cardIds" element={<CardDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
