import React from "react";
import { BestProduct } from "../Data/BestProduct.jsx";
import NavbarComponent from "../component/NavbarComponent.jsx";
import { CarouselHomepage } from "../component/Carousel.jsx";
import Category from "../component/category.jsx";
import {
    CardTrend,
    CardCategory,
    CardBestProduct
} from "../component/cardComponent.jsx";

const Homepage = () => {
    const bestProduct = BestProduct.map(item => {
        return <CardBestProduct key={item.id} item={item} />;
    });
    return (
        <>
            <main>
                <section className="mt-16 md:mt-[4rem]">
                    <CarouselHomepage />
                </section>
                <section className="p-4 ">
                    <h1 className="tracking-wide font-bold text-2xl  my-3">
                        What's New Today
                    </h1>
                    <div className="category w-full overflow-x-scroll flex gap-3 ">
                        <CardTrend />
                    </div>
                </section>
                <section>
                    <CardCategory />
                </section>
                <section>
                    <div>
                        <h1 className="text-center text-xl font-bold uppercase">
                            Product Terbaik Kami
                        </h1>
                        <div className="flex overflow-x-scroll md:items-center category ">
                            {bestProduct}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Homepage;
