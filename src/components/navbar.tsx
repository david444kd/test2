import {Navbar, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState } from "react";
export const Navvbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Table of contents",
    "Problems",
    "Solutions",
    "Tools",
    "Pricing",
    "Author",
  ];
  return (
      // <Navbar isBordered maxWidth="full" position="sticky" className="h-32">
      //     <NavbarItem  className="flex w-full justify-between">
      //       <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#1">
      //         Table of contents
      //       </Link>
      //       <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#2">
      //         Problems
      //       </Link>
      //       <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#3">
      //         Solutions
      //       </Link>
      //       <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#4">
      //         Tools
      //       </Link>
      //       <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#5">
      //         Pricing
      //       </Link>
      //       <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#6">
      //         Author
      //       </Link>
      //     </NavbarItem>
      // </Navbar>
      <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="sm:h-32"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      

        <NavbarItem className="w-full justify-between hidden sm:flex">
          <Link color="foreground" href="#1" className="lg:p-14 md:p-10 sm:p-5">
          Table of contents
          </Link>
          <Link color="foreground" href="#2" className="lg:p-14 md:p-10 sm:p-5">
          Problems
          </Link>
          <Link color="foreground" href="#3" className="lg:p-14 md:p-10 sm:p-5">
          Solutions
          </Link>
          <Link color="foreground" href="#4" className="lg:p-14 md:p-10 sm:p-5">
          Tools
          </Link>
          <Link color="foreground" href="#5" className="lg:p-14 md:p-10 sm:p-5">
          Pricing
          </Link>
          <Link color="foreground" href="#6" className="lg:p-14 md:p-10 sm:p-5">
          Author
          </Link>
        </NavbarItem>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Navvbar