import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";


export default function Carousel({ slides }) {

    let [current, setCurrent] = useState(0)

    let previousSlide = () => {
        console.log(slides.length)
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    }
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-40"
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((image, i) => {                    
                    return (
                        <>
                            <img src={image.name}/>
                            <div className={`absolute inset-x-[${i*100} * 15%] bottom-5 hidden py-5 text-center text-black md:block z-10`}>
                                <p >{image.text}</p>
                            </div>
                            
                        </>
                   
                    )
                })}
            </div>
            <div className="absolute top-0 h-full w-full items-center justify-between flex text-black px-10">
                <button onClick={previousSlide}>
                    <GrCaretPrevious />
                </button>
                <button onClick={nextSlide}>
                    <GrCaretNext />
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );

}