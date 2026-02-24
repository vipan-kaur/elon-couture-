import React from 'react'
import 'flowbite';
import Searchprovider from './searchprovider';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Topbar from './components/layout/topbar'
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import Dropdown from './components/ui/dropdown';
import Login  from './components/pages/login';
import Footer from './components/layout/footer';
import Men from './components/pages/men/men';
import Menproducts from './components/pages/men/menproducts';
import View from './components/pages/men/view';
import Women from './components/pages/women/women';
import Womenproducts from './components/pages/women/womenproducts';
import Womenview from './components/pages/women/womenview';
import Cart from './components/pages/cart';
import ScrollToTop from './ScrollToTop';
import Checkout from './components/checkout';
import Success from './components/success';



const App = () => {
  return (
    <>
   
    <Searchprovider>
    <BrowserRouter>
     <ScrollToTop />
    <Topbar/>
    <Navbar/>
    
    <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
           <Route path='/men' element={<Men/>}/>
           <Route path='/menproducts' element={<Menproducts/>}/>
           <Route path="/view/:id" element={<View/>}/>
          <Route path='/success' element={<Success/>}/>

           {/* women section */}
             <Route path='/women' element={<Women/>}/>
           <Route path='/womenproducts' element={<Womenproducts/>}/>
           <Route path="/womenview/:id" element={<Womenview/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Searchprovider>
 
    </>
  )
}

export default App