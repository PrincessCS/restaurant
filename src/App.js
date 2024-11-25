import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Order from './Order/Order';
import Company from './Company/Company';
import Faq from './Faq/Faq';
import Cart from './Features/Cart/Cart';
import Contact from './Contact/Contact';
import Checkout from './Checkout/Checkout';
import Signup from './Signup/Signup';



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
       
      </Routes>
  

      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
