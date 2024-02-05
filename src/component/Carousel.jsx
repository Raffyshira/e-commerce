import React from "react";

import { Image, Button } from "@nextui-org/react";

export const CarouselHomepage = () => {
    return (
        <>
            <div className="relative">
                <Image
                    className="w-full h-[100vh] md:h-full object-cover rounded-none brightness-75 z-0"
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=full&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXRobGV0ZXxlbnwwfDB8MHx8fDA%3D"
                    alt="..."
                />
                <div className="absolute px-10 bottom-24 left-0 md:left-20 z-10 text-white">
                    <h1 className="font-bold text-3xl">AE 1</h1>
                    <p className="mt-1.5 font-light">
                        When you step out in the AE 1, you're saying nothing can
                        stop you, Believe That
                    </p>
                    <Button
                        color="default"
                        className="text-white hover:text-black mt-3"
                        radius="sm"
                        variant="ghost"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
        </>
    );
};
