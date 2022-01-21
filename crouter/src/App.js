import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Home } from './components/Home';
import {About} from './components/About';
import {Navbar} from './components/Navbar';
import { Product } from './components/Product';
import {All} from './components/All';
import {Details} from './components/Details'
function App() {
  return (
    <div className="App">
        <Navbar/>
       <Routes>
       <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
      <Route path="/all" element={<All/>}></Route> 
      <Route path="/all/:id" element={<Details/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
