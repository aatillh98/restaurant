import Image from "next/image"
import { MdPayment, MdDeliveryDining } from 'react-icons/md'
import { AiFillCheckCircle, AiOutlineDeliveredProcedure } from 'react-icons/ai'
import { GiCookingPot } from 'react-icons/gi'

const Order = () => {

    const status = 0;
    const statusClass = (index) => {
        if(index - status === 0) return 'flex flex-col items-center';//payment
        if(index - status < 0) return 'flex flex-col items-center';//done
        if(index - status === 1) return 'flex flex-col items-center animate-inProgress';//inpr
        if(index - status > 1) return 'flex flex-col items-center opacity-1';//undo
    }

    const checkIcon = (index) => {
        if(index - status === 0) return 'text-green-600 w-5 h-5';//payment
        if(index - status < 0) return 'hidden text-green-600 w-5 h-5';//done
        if(index - status === 1) return 'hidden text-green-600 w-5 h-5';//inpr
        if(index - status > 1) return 'hidden text-green-600 w-5 h-5';//undo
    }

    return (
        <div className="p-50 flex flex-col items-center lg:flex-row">
            <div className="flex flex-col justify-between flex-grow m-5">
                <table className="border border-gray-400 w-70 md:w-full" style={{ borderSpacing: '20px' }}>
                    <tr>
                        <th className="border border-gray-300">Order ID</th>
                        <th className="border border-gray-300">Customer</th>
                        <th className="border border-gray-300">Address</th>
                        <th className="border border-gray-300">Total</th>
                    </tr>
                    <tr className="text-center">
                        <td className="border border-gray-300" >
                            <span className="font-medium text-primary text-18">87656789</span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                Anas aatillah
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="">
                                29 rue hay el masjid
                            </span>
                        </td>
                        <td className="border border-gray-300">
                            <span className="text-18 font-medium">
                                $40.80
                            </span>
                        </td>
                    </tr>
                </table>
                <div className="flex flex-col md:flex-row justify-around mt-5">
                    <div className={statusClass(0)}>
                        <MdPayment className="w-30 h-30" />
                        <span>Payment</span>
                        <AiFillCheckCircle className={checkIcon(0)} />
                    </div>
                    <div className={statusClass(1)}>
                        <GiCookingPot className="w-30 h-30" />
                        <span>Preparing</span>
                        <AiFillCheckCircle className={checkIcon(1)} />
                    </div>
                    <div className={statusClass(2)}>
                        <MdDeliveryDining className="w-30 h-30" />
                        <span>On the way</span>
                        <AiFillCheckCircle className={checkIcon(2)} />

                    </div>
                    <div className={statusClass(3)}>
                        <AiOutlineDeliveredProcedure className="w-30 h-30" />
                        <span>Delivered</span>
                        <AiFillCheckCircle className={checkIcon(3)} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-1 text-center w-full">
                <div className="flex flex-col justify-between text-white w-90 bg-333 max-h-300 p-5">
                    <h2 className="font-bold text-3xl">CART TOTAL</h2>
                    <div className="mt-5">
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
                    <button disabled className="bg-white text-teal-600 font-bold rounded-sm cursor-not-allowed mt-5">PAID</button>                </div>
            </div>
        </div>
    )
}

export default Order





