import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Image
} from "@nextui-org/react";

import { AccordionNavbar } from "./AccordionComponent.jsx";

import { MdOutlineShoppingBag } from "react-icons/md";

import { ListMenu } from "../Data/DataGlobal.jsx";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const ListNavbar = ListMenu.map(item => {
        return <AccordionNavbar key={item.id} item={item} />;
    });
    return (
        <Navbar
            isBordered
            isBlurred={false}
            shouldHideOnScroll
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="fixed top-0 left-0 right-0"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="-mr-6 lg:flex">
                    <Image
                        className="w-6 rounded-none"
                        src="https://adl-foundation.adidas.com/prod/v40.0.0/assets/flags/id.svg"
                        alt="...."
                    />
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="foreground"
                        href="/cart"
                        variant="flat"
                        className="text-xl text-black"
                    >
                        <MdOutlineShoppingBag />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem className="p-3 flex flex-col gap-3 items-start ">
                    <Link
                        className="text-lg font-semibold text-black ms-2"
                        href="/"
                    >
                        Home
                    </Link>

                    {ListNavbar}
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
