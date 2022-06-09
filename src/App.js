import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Sign-up/Signup";
// import Thankyou from "./components/Sign-up/thankyou";
import Home from "./components/Home/Home";
//import Form from "./components/Sign-up/Form";

import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
  
  <div className="App">
      <Navbar/>

	  <Router>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
          </Routes>
       </Router>
		
      <Footer />

  </div>

);
}
export default App;
