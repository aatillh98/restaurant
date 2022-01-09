import Image from "next/image"

const ProductCard = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full md:w-22 p-10 pl-5 pr-10 cursor-pointer hover:animate-bounce">
            <Image src="/img/pizza.png" objectFit="contain" width={200} height={200}/>
            <h1 className="text-lg font-bold text-primary">FIORI DI ZUCCA</h1>
            <span className="text-18 font-bold text-666">$18.34</span>
            <p className="text-24 md:text-18 text-center text-777">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default ProductCard
