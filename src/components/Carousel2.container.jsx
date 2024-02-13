import CarouselItem from "./Carousel2.component";
import data from "../data.json";
import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const CarouselContainer =()=>{
    let [current, setCurrent] = useState(0)

    let previousSlide = () => {
        console.log(data.resources.length)
        if (current === 0) setCurrent(data.resources.length - 1);
        else setCurrent(current - 1)
    }
    let nextSlide = () => {
        if (current === data.resources.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }
    return(
        <div className="carousel my-12 mx-auto">
             <div className="relative overflow-hidden">
                <div  className="carousel-container relative flex gap-1 scroll-smooth snap-x snap-mandatory touch-pan-x z-0 transition ease-out duration-40"
                style={{ transform: `translateX(-${current * 10}%)` }}>
                    <CarouselItem/>
                </div> 
                <div className="absolute top-0 w-full h-full items-center justify-between flex text-black px-10">
                <button className="h-full px-5 " onClick={previousSlide}>
                    <GrCaretPrevious />               
                </button>
                <button  onClick={nextSlide}>
                    <GrCaretNext />
                </button>
            </div>   
             </div>
             
        </div>
    )
}

export default CarouselContainer;