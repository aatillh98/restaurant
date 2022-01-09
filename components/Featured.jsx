import Image from "next/image"
import { useState } from "react"

const Featured = () => {

    const [index, setIndex] = useState(0)

    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];

    const handleArrow = (direction) => {
        if(direction === "l") {
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r") {
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    return (
        <div className="bg-mainColor h-mbSlider md:h-slider relative overflow-hidden">
            <div className="absolute top-0 bottom-0 m-auto left-0 w-24 h-24 cursor-pointer z-10 animate-bounce" onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" layout="fill" objectFit="contain" />
            </div>
            <div className="w-300 h-100 flex transition-all duration-1000 ease-in-out" style={{transform: `translateX(${-100*index}vw)`}}>
                {images.map((image, i) => (
                    <div className="w-100 h-100 relative" key={i}>
                        <Image src={image} layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 bottom-0 m-auto right-0 w-24 h-24 cursor-pointer animate-bounce" onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Featured
