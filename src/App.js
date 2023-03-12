import React from 'react'
import Home from './routes/Home';
import {Routes,Route} from 'react-router-dom';
import Training from './routes/Training';
import Contact from './routes/Contact';
import Packages from './routes/Packages';


function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/contact' element={<Contact/>}/>



      </Routes> 
    </>
  )
}

export default App