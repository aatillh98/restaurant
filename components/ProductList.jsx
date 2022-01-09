import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <div className="flex flex-col items-center px-5 pt-5">
            <h1 className="text-center text-3xl font-bold">THE BEST PIZZA IN TOWN</h1>
            <p className="text-center text-second w-90 md:w-70 text-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, cum repellendus, quibusdam, iste esse voluptates earum ipsum officia dignissimos soluta vero. Laudantium vitae sunt quam maxime veniam omnis perspiciatis.</p>
            <div className="flex items-center justify-center w-full flex-wrap pt-20">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductList;
