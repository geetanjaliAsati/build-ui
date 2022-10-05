import './App.css';
import React from 'react'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card1 from './components/productCards/Card1';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
// import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";
// import Pages from "./components/pages/Pages";
// import Login from "./components/pages/Login";
// import Search from "./components/pages/Search";
// import Cart from "./components/pages/Cart";
// import Wishlist from "./components/pages/Wishlist";

function App() {
  const[count, setCount] = React.useState(0);
  return (
    <div className="App">

       <Router>
        <Routes>
      <Route path="/" element={ <>
      <Navbar count={count}/>
      <Header />
      <Card1 setCount={setCount} count={count}/>
      <Footer />
      </>
    }></Route>
      {/* <Route path="/home" element={<Home />}></Route> */}
      <Route path="/shop" element={<Shop />}></Route>
      {/* <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/pages" element={<Pages />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route> */}
    </Routes>
  </Router >
    
    </div>
  );
}

export default App;
