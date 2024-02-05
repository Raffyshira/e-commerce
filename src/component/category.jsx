import React from "react";
import { Button } from "@nextui-org/react";
const Category = () => {
    const listItems = [
        {
            id: 1,
            title: "All"
        },
        {
            id: 2,
            title: "Casula"
        },
        {
            id: 3,
            title: "Sporty"
        },
        {
            id: 4,
            title: "Fashion"
        },
        {
            id: 5,
            title: "Branded"
        },
        {
            id: 6,
            title: "Popular"
        },
        {
            id: 7,
            title: "Hits"
        },
        {
            id: 8,
            title: "Trending"
        }
    ];
    return (
        <>
            <div className="category p-3 flex overflow-x-scroll gap-2">
                {listItems.map(item => (
                    <Button
                        color="default"
                        variant="ghost"
                        radius="full"
                        size="sm"
                        className="border-black font-semibold"
                        key={item.id}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default Category;
