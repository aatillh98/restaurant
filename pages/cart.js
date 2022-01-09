import Image from "next/image"

const cart = () => {
    return (
        <div className="p-50 flex flex-col items-center lg:flex-row">
            <div className="flex m-5">
                <table className="border border-gray-400" style={{ borderSpacing: '20px' }}>
                    <tr>
                        <th className="border border-gray-300">Product</th>
                        <th className="border border-gray-300">Name</th>
                        <th className="border border-gray-300">Extras</th>
                        <th className="border border-gray-300">Price</th>
                        <th className="border border-gray-300">Quantity</th>
                        <th className="border border-gray-300">Total</th>
                    </tr>
                    <tr className="text-center">
                        <td className="border border-gray-300">
                            <div className="w-24 h-24 relative">
                                <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="" />
                            </div>
                        </td>
                        <td className="border border-gray-300">
                            <span className="font-medium text-primary text-18">CORALZO</span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                $28.80
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                2
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="text-18 font-medium">
                                $40.80
                            </span>
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td className="border border-gray-300">
                            <div className="w-24 h-24 relative">
                                <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="" />
                            </div>
                        </td>
                        <td className="border border-gray-300">
                            <span className="font-medium text-primary text-18">CORALZO</span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                $28.80
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                2
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="text-18 font-medium">
                                $40.80
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="flex justify-center flex-1 text-center w-full">
                <div className="flex flex-col justify-between text-white w-90 bg-333 max-h-300 p-5">
                    <h2 className="font-bold text-3xl">CART TOTAL</h2>
                    <div className="">
                    <div className="">
                        <b className="">Subtotal: </b>$79.87
                    </div>
                    <div className="">
                        <b className="">Discount: </b>$00.00
                    </div>
                    <div className="">
                        <b className="">Total: </b>$79.87
                    </div>
                    </div>
                    <button className="bg-white text-primary font-bold rounded-sm">CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default cart
