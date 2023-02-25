import React from 'react'
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom'
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Works from './component/Works/Works'
import Concat from './component/Concat/Concat';
import Error from './component/Error/Error';
import Skills from './component/Skills/Skills';
import Footer from './component/footer/footer'
// import Testmionals from './components/Testmionals/Testmionals';
// import classes from './App.module.css'


const App = () => {

  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/Protfilo' element={
         <>
          <Home/>
          <About/>
          <Skills/>
          <Works/>
          <Concat/>
          <Footer/>
          </>
        }/>
        
    <Route path='/about'   element={ <About/>}/>
    <Route path='/skills'  element={<Skills/>}/>
    <Route path='/works'   element={<Works/>}/>
    <Route path='/concat' element={<Concat/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/*'  element={<Error/>}/> 
      
     </Routes>
    </Router>
  )
}

export default App;