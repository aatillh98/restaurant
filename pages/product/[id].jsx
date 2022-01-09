import Image from "next/image"
import { useState } from "react"

const Product = () => {

    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: 'CAMPAGNOLA',
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa ut necessitatibus magni quis adipisci recusandae minus."
    }

    return (
        <div className="mt-5 text-center md:text-left h-auto md:h-slider flex flex-col md:flex-row">
            <div className="flex-1 h-full flex items-center justify-center">
                <div className="w-70 h-70 md:w-80 md:h-80 relative">
                    <Image src={pizza.img} layout="fill" alt="" objectFit="contain"/>
                </div>
            </div>
            <div className="flex-1 pt-8">
                <h1 className="font-bold text-4xl pb-5">{pizza.name}</h1>
                <span className="text-primary text-24 font-normal border-solid border-b-2 border-primary">${pizza.price[size]}</span>
                <p className="py-5">{pizza.desc}</p>
                <h3 className="font-bold text-2xl">Choose the size</h3>
                <div className="flex px-12 md:px-0 md:w-2/5 justify-between py-5">
                    <div className="w-30 h-30 relative cursor-pointer hover:animate-size" onClick={() => setSize(0)}>
                        <Image alt="" src="/img/size.png" layout="fill"/>
                        <span className="absolute -top-1 -right-5 text-white text-12 pl-0 pr-1 bg-teal rounded-lg">Small</span>
                    </div>
                    <div className="w-40 h-40 relative cursor-pointer hover:animate-size" onClick={() => setSize(1)}>
                        <Image alt="" src="/img/size.png" layout="fill"/>
                        <span className="absolute -top-1 -right-5 text-white text-12 pl-0 pr-1 bg-teal rounded-lg">Medium</span>
                    </div>
                    <div className="w-50 h-50 relative cursor-pointer hover:animate-size" onClick={() => setSize(2 )}>
                        <Image alt="" src="/img/size.png" layout="fill"/>
                        <span className="absolute -top-1 -right-5 text-white text-12 pl-0 pr-1 bg-teal rounded-lg">Large</span>
                    </div>
                </div>
                <h3 className="font-bold text-2xl">Choose additional ingredients</h3>
                <div className="flex my-5 pl-3 md:pl-0">
                    <div className="flex items-center mr-2 text-14 font-medium">
                        <input type="checkbox" name="double" id="double" className="w-5 h-5 mr-1" />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className="flex items-center mr-2 text-14 font-medium">
                        <input type="checkbox" name="cheese" id="cheese" className="w-5 h-5 mr-1" />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className="flex items-center mr-2 text-14 font-medium">
                        <input type="checkbox" name="spicy" id="spicy" className="w-5 h-5 mr-1" />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className="flex items-center mr-2 text-14 font-medium">
                        <input type="checkbox" name="garlic" id="garlic" className="w-5 h-5 mr-1" />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className="flex mt-12 justify-center md:justify-start pb-5 md:pb-0">
                    <input type="number" defaultValue={1} className="w-50 h-30 focus:outline-none"/>
                    <button className="h-30 ml-2 bg-mainColor text-white border-none font-medium cursor-pointer px-1 rounded-md hover:animate-size">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
