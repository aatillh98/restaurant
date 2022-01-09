import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex md:justify-between items-center sticky h-20 py-10 top-0 bg-mainColor z-20">
            <div className="flex items-center ml-5 flex-grow">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Image src="/img/telephone.png" width={30} height={30} />
                </div>
                <div className="ml-5 text-white">
                    <div className="text-xs font-semibold">ORDER NOW!</div>
                    <div className="font-bold text-xl">+212-701-105-097</div>
                </div>
            </div>
            <div className="hidden md:flex items-center flex-grow">
                <ul className="p-0 flex items-center list-none text-white">
                    <li className="font-medium m-5">Homepage</li>
                    <li className="font-medium m-5">Products</li>
                    <li className="font-medium m-5">Menu</li>
                    <Image src="/img/logo.png" width={160} height={69} />
                    <li className="font-medium m-5">Events</li>
                    <li className="font-medium m-5">Blog</li>
                    <li className="font-medium m-5">Contact</li>
                </ul>
            </div>
            <div className="items-center mr-4 flex md:flex-grow">
                <div className="flex relative">
                    <Image src="/img/cart.png" width={30} height={30} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white items-center justify-center flex font-bold text-primary">2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
