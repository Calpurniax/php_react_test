import data from "../data.json";
const CarouselItem = () => {
    return data.resources.map((resource, index) => {
        return (
            <div key={index} className="carousel-item text-center relative w-64 h-64 snap-start">
                <a  href={resource.link} className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}>
                    <img src={resource.imageUrl || ""} alt={resource.title} className="w-full aspect-square hidden" />          
                </a>
                <a href={resource.link}className="h-full w-full aspect-square block absolute top-0 left-0 hover:bg-blue-800/75 z-10">
                    <h3 className="text-white py-6 px-3 mx-auto text-xl">
                        {resource.title}
                    </h3>    
                </a>
            </div>
        )
    })

}

export default CarouselItem