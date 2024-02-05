import React from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Link, Image, Divider } from "@nextui-org/react";
const FooterComponent = () => {
    return (
        <>
            <div className="max-w-full mt-10 bg-black text-white">
                <div className="p-5">
                    <div className="grid grid-cols-2 place-items-center uppercase text-base">
                        <h2 className="inline-flex items-baseline">
                            <FaUserAlt className="mr-2" />
                            Masuk
                        </h2>
                        <h2 className="inline-flex items-baseline ">
                            <FaShoppingCart className="mr-2" />
                            Cart Anda (0)
                        </h2>
                    </div>
                    <Divider className="hidden md:block bg-white my-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-4 items-center">
                        <h3 className="font-extrabold text-2xl mt-5 leading-none">
                            DAFTARKAN EMAIL ANDA UNTUK MENDAPATKAN INFO DAN
                            PENAWARAN SPESIAL
                        </h3>
                        <Button
                            radius="none"
                            className="bg-white text-black w-full mt-3 font-bold uppercase"
                            endContent={<FaArrowRightLong />}
                        >
                            Sign Up For Free
                        </Button>
                    </div>
                    <Divider className="hidden md:block bg-white my-3" />
                    <div className="grid grid-cols-2 place-items-center mt-5 gap-5">
                        <Link
                            className="text-white text-sm font-light hover:underline"
                            href="#!"
                        >
                            Contact Online Shop
                        </Link>
                        <Link
                            className="text-white text-sm font-light hover:underline"
                            href="#"
                        >
                            Delivery
                        </Link>
                        <Link
                            className="text-white font-light text-sm hover:underline"
                            href="#"
                        >
                            FAQ
                        </Link>
                        <Link
                            className="font-light text-white text-sm hover:underline"
                            href="#"
                        >
                            Order Status
                        </Link>
                    </div>
                </div>
                <div className="mt-5 bg-slate-800">
                    <div className="flex items-center justify-center">
                        <Image
                            src="https://adl-foundation.adidas.com/prod/v37.1.1/assets/flags/id.svg"
                            alt="..."
                            className="w-5 rounded-none mr-3"
                        />
                        <p className=" text-sm underline">Indonesia</p>
                    </div>
                    <div className="flex justify-center mt-2 items-center">
                        <Link
                            className="text-white text-xs hover:underline mx-1"
                            href=""
                        >
                            Privacy Policy
                        </Link>
                        <span> | </span>
                        <Link
                            className="text-white text-xs hover:underline mx-1"
                            href=""
                        >
                            Terms and Conditions
                        </Link>
                    </div>
                    <p className="text-center text-xs mt-1 font-light">
                        &copy; 2021 Reyvuan Indonesia
                    </p>
                </div>
            </div>
        </>
    );
};

export default FooterComponent;
