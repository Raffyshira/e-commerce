import React from "react";
import {
    Accordion,
    AccordionItem,
    Divider,
    Link,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/react";

import { IoChevronForward } from "react-icons/io5";

export const AccordionForFilter = props => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["0"]));
    return (
        <>
            <Accordion
                isCompact
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <AccordionItem
                    key={props.item.id}
                    aria-label={`Accordion ${props.item.id} `}
                    title={props.item.title}
                    className="font-bold"
                >
                    <span className="font-light">{props.item.element}</span>
                </AccordionItem>
            </Accordion>
            <Divider />
        </>
    );
};

export const AccordionForUrutkan = props => {
    return (
        <>
            <Accordion isCompact>
                <AccordionItem
                    key={props.item.id}
                    aria-label={`Accordion ${props.item.id} `}
                    title={props.item.title}
                    className="font-bold"
                ></AccordionItem>
            </Accordion>
            <Divider />
        </>
    );
};

export const AccordionNavbar = props => {
    return (
        <>
            <Accordion>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title={props.item.ParentTitle}
                    className="font-bold"
                >
                    <ul>
                        {props.item.list.map(subItem => (
                            <li>
                                <Link
                                    size="md"
                                    className="text-black font-medium"
                                    href={`/${props.item.ParentTitle}/${subItem.title}`}
                                >
                                    {subItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AccordionItem>
            </Accordion>
        </>
    );
};
