import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel.component.jsx';
import CarouselContainer from './components/Carousel2.container.jsx';
import first from './assets/images/1.jpg';
import second from './assets/images/2.jpg';
import third from './assets/images/3.jpg';


export default function App() {

  let slides = [
    first,
    second,
    third]

  return (
    <BrowserRouter>
      <nav className='flex justify-around p-5 mt-7'>
        <Link to="/">Home</Link>
        <Link to="/prueba">Prueba</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Carousel slides={slides} />} />
        <Route path='/prueba' element={<CarouselContainer />} />
      </Routes>
    </BrowserRouter>
  )
}


