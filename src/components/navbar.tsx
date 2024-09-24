import {
  Navbar,
  NavbarItem,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Navvbar = () => {
  const { t } = useTranslation();
  const [navButton, setnavButton] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
      setnavButton(false);
      let scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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
                  navText.textContent = t("nav.0.6");
                }
              }
              if (sectionId == "Pricing") {
                if (spanText) {
                  spanText.textContent = "05";
                  navText.textContent = t("nav.0.5");
                }
              }
              if (sectionId == "Tools and Templates") {
                if (spanText) {
                  spanText.textContent = "04";
                  navText.textContent = t("nav.0.4");
                }
              }
              if (sectionId == "Solutions") {
                if (spanText) {
                  spanText.textContent = "03";
                  navText.textContent = t("nav.0.3");
                }
              }
              if (sectionId == "Problems") {
                if (spanText) {
                  spanText.textContent = "02";
                  navText.textContent = t("nav.0.2");
                }
              }
              // if (sectionId == "Contents") {
              //   if (spanText) {
              //     spanText.textContent = "01";
              //     navText.textContent = "Contents";
              //   }
              // }
              if (sectionId == "Table of contents") {
                if (spanText) {
                  spanText.textContent = "01";
                  navText.textContent = t("nav.0.1");
                }
              }
              // navText.textContent = sectionId;
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
            {/* Table of contents */}
            {t("nav.0.1")}
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Problems"
          >
            {/* Problems */}
            {t("nav.0.2")}
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Solutions"
          >
            {/* Solutions */}
            {t("nav.0.3")}
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Tools and Templates"
          >
            {/* Tools */}
            {t("nav.0.4")}
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Pricing"
          >
            {/* Pricing */}
            {t("nav.0.5")}
          </Link>
          <Link
            className="lg:p-13 md:p-10 sm:p-5 nav-list w-full justify-center"
            color="foreground"
            href="#Author"
          >
            {/* Author */}
            {t("nav.0.6")}
          </Link>
        </NavbarItem>
      </Navbar>

      <div className="sticky top-0 z-50">
        <Popover placement="bottom">
          <PopoverTrigger
            onClick={() => {
              if (navButton == false) {
                setnavButton(true);
              } else {
                setnavButton(false);
              }
            }}
          >
            <Button className="flex w-full sm:hidden h-14 rounded-none justify-between">
              <div className="flex justify-center">
                <p
                  id="spanText"
                  className="font-mono text-sm text-orange-500 pl-2 pr-2"
                ></p>
                <p id="popoverText" className="text-black"></p>
              </div>
              {navButton && (
                <>
                  <div>
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 stroke-slate-700"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 7 7 17M7 7l10 10"></path>
                    </svg>
                  </div>
                </>
              )}
              {navButton == false && (
                <>
                  <div>
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 stroke-slate-700"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m15 16-3 3-3-3M15 8l-3-3-3 3"></path>
                    </svg>
                  </div>
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[90vw] items-start gap-2 border-none rounded-none ">
            <div className="px-1 py-2 w-full">
              <Link
                className="flex gap-2 w-full"
                color="foreground"
                href="#Table of contents"
              >
                <span className="font-mono text-sm text-orange-500 pl-2">
                  01
                </span>
                {t("nav.0.1")}
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link
                className="gap-2 w-full"
                color="foreground"
                href="#Problems"
              >
                <span className="font-mono text-sm text-orange-500 pl-2">
                  02
                </span>
                {t("nav.0.2")}
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link
                className="gap-2 w-full"
                color="foreground"
                href="#Solutions"
              >
                <span className="font-mono text-sm text-orange-500 pl-2">
                  03
                </span>
                {t("nav.0.3")}
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link
                className="gap-2 w-full"
                color="foreground"
                href="#Tools and Templates"
              >
                <span className="font-mono text-sm text-orange-500 pl-2">
                  04
                </span>
                {t("nav.0.4")}
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link className="gap-2 w-full" color="foreground" href="#Pricing">
                <span className="font-mono text-sm text-orange-500 pl-2">
                  05
                </span>
                {t("nav.0.5")}
              </Link>
            </div>
            <div className="px-1 py-2 w-full">
              <Link className="gap-2 w-full" color="foreground" href="#Author">
                <span className="font-mono text-sm text-orange-500 pl-2">
                  06
                </span>
                {t("nav.0.6")}
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
export default Navvbar;
