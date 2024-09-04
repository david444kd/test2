import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
export const Navvbar = () => {
  return (
      <Navbar isBordered maxWidth="full" position="sticky" className="h-32">
        <NavbarContent>
          <NavbarItem  className="flex w-full justify-between">
            <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#1">
              Table of contents
            </Link>
            <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#2">
              Problems
            </Link>
            <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#3">
              Solutions
            </Link>
            <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#4">
              Tools
            </Link>
            <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#5">
              Pricing
            </Link>
            <Link className="lg:p-14 md:p-10 sm:p-5" color="foreground" href="#6">
              Author
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  )
}

export default Navvbar