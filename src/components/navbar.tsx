import {
  Navbar,
  NavbarItem,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { useRef } from "react";
export const Navvbar = () => {
  const buttonRef = useRef<HTMLParagraphElement>(null);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".nav-List").forEach((link) => {
            link.classList.toggle(
              "bg-blue-100",
              link.getAttribute("href")?.replace("#", "") === entry.target.id
            );
          });
          if (buttonRef.current) {
            buttonRef.current.textContent = entry.target.id;
          }
        }
      });
    },
    { threshold: 0.7 }
  );
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
  return (
    <>
      <Navbar
        isBordered
        maxWidth="full"
        position="sticky"
        className="h-28 hidden sm:flex sticky"
      >
        <NavbarItem className="flex w-full justify-between">
          <Link
            className="lg:p-11 md:p-10 sm:p-5 nav-list"
            color="foreground"
            href="#Table of contents"
          >
            Table of contents
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list"
            color="foreground"
            href="#Problems"
          >
            Problems
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list"
            color="foreground"
            href="#Solutions"
          >
            Solutions
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list"
            color="foreground"
            href="#Tools and Templates"
          >
            Tools
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list"
            color="foreground"
            href="#Pricing"
          >
            Pricing
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list"
            color="foreground"
            href="#Author"
          >
            Author
          </Link>
        </NavbarItem>
      </Navbar>

      <div className="sticky top-0 z-50">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className="flex w-full sm:hidden rounded-none justify-start">
              <p ref={buttonRef}></p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[90vw] items-start gap-2 border-none rounded-none ">
            <div className="px-1 py-2 w-full">
              <Link
                className="flex gap-2 w-full"
                color="foreground"
                href="#Table of contents"
              >
                <span className="font-mono text-sm text-blue-600 pl-2">01</span>
                Table of contents
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link
                className="gap-2 w-full"
                color="foreground"
                href="#Problems"
              >
                <span className="font-mono text-sm text-blue-600 pl-2">02</span>
                Problems
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link
                className="gap-2 w-full"
                color="foreground"
                href="#Solutions"
              >
                <span className="font-mono text-sm text-blue-600 pl-2">03</span>
                Solutions
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link
                className="gap-2 w-full"
                color="foreground"
                href="#Tools and Templates"
              >
                <span className="font-mono text-sm text-blue-600 pl-2">04</span>
                Tools
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link className="gap-2 w-full" color="foreground" href="#Pricing">
                <span className="font-mono text-sm text-blue-600 pl-2">05</span>
                Pricing
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link className="gap-2 w-full" color="foreground" href="#Author">
                <span className="font-mono text-sm text-blue-600 pl-2">06</span>
                Author
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Navvbar;
