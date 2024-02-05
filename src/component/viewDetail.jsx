import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Select,
    SelectItem,
    Divider,
    Image,
    Accordion,
    AccordionItem,
    Input,
    Tabs,
    Tab,
    Card,
    CardBody
} from "@nextui-org/react";
import { CardBestProduct } from "./cardComponent.jsx";
import {
    AccordionForFilter,
    AccordionForUrutkan
} from "./AccordionComponent.jsx";
import { listFilter, ListUrutkan } from "../Data/DataGlobal.jsx";
import { FaCartShopping, FaArrowRight } from "react-icons/fa6";
import { FaRegHeart, FaCheck, FaChevronDown } from "react-icons/fa";
import { BestProduct } from "../Data/BestProduct.jsx";
import { useParams } from "react-router-dom";
import { BiRuler, BiSolidPackage } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const AccordionFilter = ({ listFilter }) => {
    return listFilter.map(item => (
        <AccordionForFilter key={item.id} item={item} />
    ));
};

const AccordionUrutkan = ({ ListUrutkan }) => {
    return ListUrutkan.map(item => (
        <AccordionForUrutkan key={item.id} item={item} />
    ));
};

export const Filter = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                className="bg-transparent border border-black font-medium uppercase text-start p-3"
                onPress={onOpen}
                radius="none"
                endContent={<FaChevronDown />}
            >
                Filter Berdasarkan
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-row justify-between items-center gap-1">
                                <p className="text-2xl font-bold">
                                    Filter Berdasarkan
                                </p>
                                <p className="text-sm underline">Hapus Semua</p>
                            </ModalHeader>
                            <ModalBody>
                                <AccordionFilter listFilter={listFilter} />
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
export const UrutkanBerdasarkan = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                className="bg-transparent border border-black p-3 font-medium uppercase"
                onPress={onOpen}
                radius="none"
                endContent={<FaChevronDown />}
            >
                Urutkan Berdasarkan
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-row justify-between items-center gap-1">
                                <p className="text-2xl font-bold">
                                    Urutkan Berdasarkan
                                </p>
                                <p className="text-sm underline">Hapus Semua</p>
                            </ModalHeader>
                            <ModalBody>
                                <AccordionUrutkan ListUrutkan={ListUrutkan} />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export const ProductDetail = props => {
    const { name } = useParams();
    const product = BestProduct.find(item => item.name === name);

    // Jika produk tidak ditemukan, tampilkan pesan
    if (!product) {
        return <p className="mt-56">Produk tidak ditemukan</p>;
    }

    const bestProduct = BestProduct.map(item => {
        return <CardBestProduct key={item.id} item={item} />;
    });
    return (
        <>
            <div className="max-w-full p-5">
                <div className="flex flex-wrap justify-between mt-20 text-sm underline">
                    <p>{product.name}</p>
                    <p>Tulis Ulasan</p>
                </div>
                <div className="mt-5">
                    <h1 className="text-4xl font-semibold uppercase italic">
                        {product.name}
                    </h1>
                    <p className="mt-4 font-light">MultiColor</p>
                    <p className="font-bold mt-2">{product.price}</p>
                </div>
                <div className="relative">
                    <Image src={product.image} alt={product.name} />
                    <span className="bg-white absolute top-6 left-0 p-1.5 mt-5 ms-2 -rotate-90 z-10 text-base font-light italic uppercase tracking-widest">
                        Baru
                    </span>
                </div>
                <div className="mt-5">
                    <h2 className="font-bold uppercase">Pilih Size</h2>
                    <div className="flex flex-wrap justify-between gap-1">
                        <Select
                            variant="underlined"
                            placeholder="UK"
                            className="max-w-[45%]"
                        >
                            <SelectItem>UK</SelectItem>
                            <SelectItem>EUROPE</SelectItem>
                            <SelectItem>USA</SelectItem>
                        </Select>
                        <Select
                            variant="underlined"
                            placeholder="Size"
                            className="max-w-[50%]"
                        >
                            <SelectItem>9.6</SelectItem>
                            <SelectItem>45</SelectItem>
                            <SelectItem>5.6</SelectItem>
                        </Select>
                    </div>
                    <p className="text-red-500 font-bold mt-4">Low Stock</p>
                    <div className="flex justify-between items-center underline mt-4 text-sm">
                        <p className="inline-flex items-center">
                            <BiRuler className="text-lg mr-1" /> Panduan Ukuran
                        </p>
                        <p className="inline-flex items-center">
                            <MdOutlineEmail className="mr-1" /> Ukuran yang
                            dipilih habis?
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-4 gap-1">
                        <Button
                            className="col-span-3"
                            color="primary"
                            variant="ghost"
                            radius="sm"
                        >
                            Tambahkan Ke Keranjang <FaArrowRight />
                        </Button>
                        <Button className="bg-black col-span-1" variant="solid">
                            <FaRegHeart className="text-xl text-white hover:text-red-500" />
                        </Button>
                    </div>
                    <div className="mt-8 text-sm grid grid-cols-1 gap-4">
                        <div className="flex items-center gap-3">
                            <BiSolidPackage className="text-2xl" />
                            <div className="font-light">
                                <p className="text-sm underline">Learn More</p>
                                <p className="text-sm">Free delivery</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CiCircleInfo className="text-2xl" />
                            <div className="font-light">
                                <p className="text-sm underline">Learn More</p>
                                <p className="text-sm">
                                    Not the Right Size or colors
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck className="text-2xl" />
                            <div className="font-light">
                                <p className="text-sm underline">Learn More</p>
                                <p className="text-sm">
                                    Read our Terms and Conditions
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaRegHeart className="text-2xl" />
                            <div className="font-light">
                                <p className="text-sm underline">Anda Suka ?</p>
                                <p className="text-sm">
                                    Bagikan product ini ke orang lain
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <article>
                            <h1 className="text-3xl font-bold uppercase">
                                {product.name}
                            </h1>
                            <p className="mt-3 font-light">
                                {product.description}
                            </p>
                        </article>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold uppercase text-2xl">
                            Spesifikasi
                        </h2>
                        <ul className="list-disc list-inside px-5 mt-3 leading-loose font-medium">
                            <li>Regular Fit</li>
                            <li>Leather and synthetic leather upper</li>
                            <li>Rubber cupsole with EVA drop-in</li>
                            <li>Lace closure</li>
                            <li>Textile lining</li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-3xl text-center uppercase font-bold">
                            Anda Mungkin Menyukai Nya
                        </h3>
                        <div className="flex flex-row-reverse overflow-x-scroll md:items-center category ">
                            {bestProduct}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
