import Image from "next/image"

const Footer = () => {
    return (
        <div className="h-auto md:h-slider bg-dark flex">
            <div className="hidden md:flex flex-1 relative">
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className="text-center sm:flex flex-1 relative py-5 p-12 justify-between">
                <div className="flex-1 px-5">
                    <h2 className=" text-gray-300 font-bold text-24">OH YES, WE DID. THELAMA PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
                </div>
                <div className="flex-1 pl-0 pr-5">
                    <h1 className="text-14 md:text-18 text-gold font-bold">FIND OUR RESTAURANTS</h1>
                    <p className=" text-12 md:text-14 text-gray-200 py-3">
                        29 RUE 2 HEY ELMASJID.
                        <br />Casablanca, 20550
                        <br />+212-701-105-097
                    </p>
                    <p className="text-12 md:text-14 text-gray-200 py-3">
                        29 RUE 2 HEY ELMASJID.
                        <br />Casablanca, 20550
                        <br />+212-701-105-097
                    </p>
                    <p className="text-12 md:text-14 text-gray-200 py-3">
                        29 RUE 2 HEY ELMASJID.
                        <br />Casablanca, 20550
                        <br />+212-701-105-097
                    </p>
                </div>
                <div className="flex-1 pl-0 pr-5">
                    <h1 className="text-14 md:text-18 text-gold font-bold">WORKING HOURS</h1>
                    <p className="text-12 md:text-14 text-gray-200 py-3">
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className="text-12 md:text-14 text-gray-200 py-3">
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
