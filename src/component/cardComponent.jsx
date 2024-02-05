import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    Link
} from "@nextui-org/react";
import { FaRegHeart, FaArrowRight } from "react-icons/fa";

const listItems = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww",
        title: "AE 1 New Wave",
        section: "bottom-0"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        title: "Selalu Tampil Stylish",
        section: "top-0"
    },
    {
        id: 3,
        img: "https://www.adidas.co.id/media/wysiwyg/TC-ADIZERO-TAKUMI-SEN.png",
        title: "Experience Fast",
        section: "bottom-0"
    },
    {
        id: 4,
        img: "https://www.adidas.co.id/media/wysiwyg/TC-ADIFOM-MULE.png",
        title: "Adifoam Stan Smith Mules",
        section: "top-0"
    },
    {
        id: 5,
        img: "https://www.adidas.co.id/media/wysiwyg/originals-fw23-campus00-black-tcc-poster_image-d.jpg",
        title: "Campus 00s",
        section: "bottom-0"
    }
];

export const CardTrend = () => {
    return (
        <>
            {listItems.map(item => (
                <div className="w-full">
                    <Card
                        isFooterBlurred
                        className={`w-56 sm:w-96  sm:${item.section[1]}`}
                        key={item.id}
                        fullwidth={true}
                    >
                        <Image
                            removeWrapper
                            isZoomed
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={item.img}
                        />
                        <CardFooter
                            className={`absolute z-10 ${item.section}  flex-col !items-start md:hidden`}
                        >
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                {item.title}
                            </p>
                            <h4 className="text-white font-medium text-base line-clamp-1">
                                Soft suede and fades tones, styled for the next
                                generation. This is the Campus 00s
                            </h4>
                        </CardFooter>
                    </Card>
                    <div className="mt-2 p-2 hidden md:block">
                        <h1 className="font-bold text-xl">{item.title}</h1>
                        <h4 className="text-black font-light text-base mt-1.5">
                            Soft suede and fades tones, styled for the next
                            generation. This is the Campus 00s
                        </h4>
                        <Button
                            color="default"
                            variant="light"
                            className="mt-1 -ms-3 rounded-md font-semibold border-black hover:underline text-xl"
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>
            ))}
        </>
    );
};

export const CardCategory = () => {
    const listImage = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnR8ZW58MHwwfDB8fHww",
            title: "Pria"
        },
        {
            id: 2,
            img: "https://www.adidas.co.id/media/scandiweb/slider/n/a/nav-kids-d_tcm207-819367_3.jpg",
            title: "Anak"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0JTIwd29tZW58ZW58MHwwfDB8fHww",
            title: "Wanita"
        }
    ];

    const NewRelease = [
        {
            id: 1,
            img: "https://www.adidas.co.id/media/scandiweb/slider/s/u/superstarmobile.jpg",
            title: "SuperStar"
        },
        {
            id: 2,
            img: "https://www.adidas.co.id/media/scandiweb/slider/s/t/stansmithmobile.jpg",
            title: "Stan Smith"
        },
        {
            id: 3,
            img: "https://www.adidas.co.id/media/scandiweb/slider/u/b/ub-hp-mobile.jpg",
            title: "UltraBoost"
        },
        {
            id: 4,
            img: "https://www.adidas.co.id/media/scandiweb/slider/m/o/mobile_fourcolumn_nmd.jpg",
            title: "Nmd"
        }
    ];
    return (
        <>
            <div className="p-5 relative w-full md:grid md:grid-cols-3 gap-4">
                {listImage.map(item => (
                    <>
                        <div className="relative overflow-hidden mb-3">
                            <Image
                                src={item.img}
                                alt="..."
                                className="w-full h-[28rem] rounded-none object-cover"
                            />
                            <Button
                                variant="solid"
                                size="md"
                                className="absolute bottom-20 left-40 z-10 bg-black text-white rounded-none uppercase  font-bold tracking-wide inline-flex p-3"
                            >
                                {item.title}
                                <FaArrowRight />
                            </Button>
                        </div>
                    </>
                ))}
            </div>
            <div className="p-5 relative w-full md:grid md:grid-cols-2 md:gap-4">
                {NewRelease.map(item => (
                    <>
                        <div className="relative w-full mb-4 overflow-hidden">
                            <Image
                                src={item.img}
                                alt={item.title}
                                className="w-full h-32 object-cover"
                            />
                            <h1 className="absolute bottom-14 uppercase underline underline-offset-2 z-20 left-10 font-bold tracking-widest">
                                {item.title}
                            </h1>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export const CardBestProduct = props => {
    return (
        <>
            <div className="p-5 max-w-full h-full">
                <div className="w-44 h-full relative">
                    <Link href={`/Product/${props.item.name}`}>
                        <Image src={props.item.image} alt={props.item.name} />
                    </Link>
                    <div>
                        <span className="absolute top-5 right-0 p-3 z-10 text-lg">
                            <FaRegHeart />
                        </span>
                        <span className="bg-white absolute top-4 left-0 p-1.5 mt-5 ms-2 -rotate-90 z-10 text-xs font-light italic uppercase tracking-widest">
                            Baru
                        </span>
                    </div>
                    <div className="p-2.5">
                        <h3 className=" tracking-wide font-extralight">
                            {props.item.name}
                        </h3>
                        <p className="text-sm text-default-600">
                            {props.item.price}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
