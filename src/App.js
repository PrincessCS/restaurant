import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Order from './Components/Order/Order';
import Company from './Components/Company/Company';
import Faq from './Components/Faq/Faq';
import Cart from './Features/Cart/Cart';
import Contact from './Components/Contact/Contact';
import Checkout from './Components/Checkout/Checkout';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/company" element={<Company />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Contact />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
       
      </Routes>
  

      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
