import {
  Navbar,
  NavbarItem,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { useEffect } from "react";
// import { useRef } from "react";
const Navvbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      let scrollY = window.scrollY;
      sections.forEach((current) => {
        // console.log(current);
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          console.log("FOUND", sectionId);
          const linkElement = document.querySelector(
            "a[href*='" + sectionId + "']"
          );

          if (linkElement) {
            linkElement.classList.add("stylesNav");
            const navText = document.querySelector("#popoverText");
            const spanText = document.querySelector("#spanText");
            if (navText) {
              if (sectionId == "Author") {
                if (spanText) {
                  spanText.textContent = "06";
                  navText.textContent = "Author";
                }
              }
              if (sectionId == "Pricing") {
                if (spanText) {
                  spanText.textContent = "05";
                  navText.textContent = "Pricing";
                }
              }
              if (sectionId == "Tools and Templates") {
                if (spanText) {
                  spanText.textContent = "04";
                  navText.textContent = "Tools";
                }
              }
              if (sectionId == "Solutions") {
                if (spanText) {
                  spanText.textContent = "03";
                  navText.textContent = "Solutions";
                }
              }
              if (sectionId == "Problems") {
                if (spanText) {
                  spanText.textContent = "02";
                  navText.textContent = "Problems";
                }
              }
              if (sectionId == "Contents") {
                if (spanText) {
                  spanText.textContent = "01";
                  navText.textContent = "Contents";
                }
              }
              if (sectionId == "Table of contents") {
                if (spanText) {
                  spanText.textContent = "01";
                  navText.textContent = "Table of contents";
                }
              }
              navText.textContent = sectionId;
            }
          }
        } else {
          const linkElement = document.querySelector(
            "a[href*='" + sectionId + "']"
          );
          if (linkElement) {
            linkElement.classList.remove("stylesNav");
          }
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar
        isBordered
        maxWidth="full"
        position="sticky"
        className="h-28 hidden sm:flex sticky"
      >
        <NavbarItem className="flex w-full justify-between navigation">
          <Link
            className="lg:p-11 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Table of contents"
          >
            Table of contents
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Problems"
          >
            Problems
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Solutions"
          >
            Solutions
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Tools and Templates"
          >
            Tools
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Pricing"
          >
            Pricing
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
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
              <p
                id="spanText"
                className="font-mono text-sm text-blue-600 pl-2"
              ></p>
              <p id="popoverText" className="text-black"></p>
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
