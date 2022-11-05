import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import './Container.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
