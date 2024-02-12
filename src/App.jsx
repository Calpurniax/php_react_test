import { useState } from 'react'

import './App.css';
import Carousel from './components/Carousel.component.jsx';
import first from './assets/images/1.jpg';
import second from './assets/images/2.jpg';
import third from './assets/images/3.jpg';

export default function App() {
  let slides =[
   first,
   second,
   third
  ];
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className='w-[60%] m-auto'>
        <Carousel slides={slides}/>
      </div>      
    </>
    )
}


