import React from "react";
import { useParams } from "react-router-dom";

import { ListMenu } from "../../Data/DataGlobal.jsx";
import {
    Accordion,
    AccordionItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@nextui-org/react";
import { Filter, UrutkanBerdasarkan } from "../../component/viewDetail.jsx";
import { CardBestProduct } from "../../component/cardComponent.jsx";
import { BestProduct } from "../../Data/BestProduct.jsx";

const TemplatePage = () => {
    const { parentName, subName } = useParams();
    const Page = ListMenu.find(item => item.ParentTitle === parentName);

    const bestProduct = BestProduct.map(item => {
        return <CardBestProduct key={item.id} item={item} />;
    });

    return (
        <>
            <div className="p-5 mt-20">
                <h1 className="text-3xl font-bold italic">
                    {Page.ParentTitle}
                </h1>
            </div>
            <div className="grid grid-cols-2">
                <Filter />
                <UrutkanBerdasarkan />
            </div>
            <section>
                <div className="grid grid-cols-2">{bestProduct}</div>
            </section>
        </>
    );
};

export default TemplatePage;
