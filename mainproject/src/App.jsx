import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Topbar from './components/layout/topbar'
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import Dropdown from './components/ui/dropdown';
import Login  from './components/pages/login';
import Footer from './components/layout/footer';

const App = () => {
  return (
    <><BrowserRouter>
    <Topbar/>
    <Navbar/>
    
    <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path='login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App