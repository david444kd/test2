import { Button, Link, Image } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Book1 from "../assets/cover_ru.png";
import Book2 from "../assets/cover_en.png";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header className="w-full min-w-full">
      <div className="top-0 bg-slate-100 flex w-[100vw] h-[180vw] sm:h-[100vw] md:h-[80vw] lg:h-56 items-end lg:items-center lg:justify-end justify-center">
        <div className="lg:grid hidden w-[50vw]">
          <div className="flex justify-center md:justify-start  mb-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div>
            <p className="text-slate-900 font-bold mb-2 text-center md:text-start absolute m-auto left-7 right-7 top-2/3 sm:top-auto sm:right-auto sm:left-auto sm:static">
              {t("top.0.about")}
            </p>
            <p className="text-slate-400 mb-6 text-center md:text-start absolute m-auto left-7 right-7 top-3/4 sm:top-auto sm:right-auto sm:left-auto sm:static">
              <span className="text-blue-500">{t("top.0.topName")}</span>{" "}
              {t("top.0.topDescription")}
            </p>
          </div>
        </div>
        <div className="lg:hidden grid w-[80vw]">
          <div className="flex justify-center   mb-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-orange-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div>
            <p className="text-slate-900 font-bold mb-2 text-center">
              {t("top.0.about")}
            </p>
            <p className="text-slate-400 mb-6 text-center">
              <span className="text-blue-500">{t("top.0.topName")}</span>
              {t("top.0.topDescription")}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2 md:p-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          <div className="absolute z-50 flex justify-center -translate-x-1/2  -translate-y-1/2 left-1/2 right-1/2 lg:right-auto lg:left-auto lg:-translate-x-0 lg:-translate-y-0 lg:ml-28  top-52 lg:top-32 w-64 md:w-96 lg:w-[25vw]">
            {language == "en" && (
              <Image
                loading="eager"
                className="w-64 md:w-80 lg:w-[30vw] "
                src={Book2}
                alt=""
              />
            )}
            {language == "ru" && (
              <Image
                loading="eager"
                className="w-64 md:w-80 lg:w-[30vw] "
                src={Book1}
                alt=""
              />
            )}
          </div>
          <div></div>

          <div className="h-2/4 xl:h-full lg:h-3/4 absolute top-0 -bottom-12 left-0  lg:right-[80vw] md:right-[70vw] right-2/4 z-10 rounded-br-3xl bg-orange-500 text-white/10 md:bottom-8 lg:-inset-y-[5vw] md:-inset-y-[10vw] lg:left-[-100vw] ">
            <svg aria-hidden="true" className="absolute inset-0 h-auto w-full ">
              <defs>
                <pattern
                  id=":r0:"
                  width="128"
                  height="128"
                  patternUnits="userSpaceOnUse"
                  x="100%"
                  y="100%"
                  patternTransform="translate(112 64)"
                >
                  <path
                    d="M0 128V.5H128"
                    fill="none"
                    stroke="currentColor"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#:r0:)"></rect>
            </svg>
          </div>

          <div className="sm:text-center md:text-left pt-7 sm:pt-10 ">
            <h1 className=" text-4xl md:text-5xl font-bold mb-4">
              {t("header.0.caption")}
            </h1>
            <p className="text-gray-700 mb-6">{t("header.0.info1")}</p>
            <p className="text-gray-700 mb-6">
              {t("header.0.info2")}
              {/* <Link className="text-blue-500 sm:px-1" href="#Founder">
                {language == "ru" ? "основателям" : "founder"}
              </Link>
              <span className="pr-1">{t("header.0.info2_2")}</span>
              {language == "ru" ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Link className="p-0 m-0">
                      рынках <span className="text-default-900">,</span>
                    </Link>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="USA">США</DropdownItem>
                    <DropdownItem key="China">Китай</DropdownItem>
                    <DropdownItem key="England">Англия</DropdownItem>
                    <DropdownItem key="USA">Бразиия</DropdownItem>
                    <DropdownItem key="China">Турция</DropdownItem>
                    <DropdownItem key="England">Казахстан</DropdownItem>
                    <DropdownItem key="USA">Индия</DropdownItem>
                    <DropdownItem key="China">Мексика</DropdownItem>
                    <DropdownItem key="England">Индонезия</DropdownItem>
                    <DropdownItem key="USA">Филиппины</DropdownItem>
                    <DropdownItem key="China">ОАЭ</DropdownItem>
                    <DropdownItem key="England">Африка</DropdownItem>
                    <DropdownItem key="England">Гонконг</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Dropdown>
                  <DropdownTrigger>
                    <Link>
                      market <span className="text-default-900">,</span>
                    </Link>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="USA">USA</DropdownItem>
                    <DropdownItem key="China">China</DropdownItem>
                    <DropdownItem key="England">England</DropdownItem>
                    <DropdownItem key="USA">Brazil</DropdownItem>
                    <DropdownItem key="China">Turkey</DropdownItem>
                    <DropdownItem key="England">Kazhakhstan</DropdownItem>
                    <DropdownItem key="USA">India</DropdownItem>
                    <DropdownItem key="China">Mexico</DropdownItem>
                    <DropdownItem key="England">Indonesia</DropdownItem>
                    <DropdownItem key="USA">Philippines</DropdownItem>
                    <DropdownItem key="China">UAE</DropdownItem>
                    <DropdownItem key="England">Africa</DropdownItem>
                    <DropdownItem key="England">Hong Kong</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}
              <span> {t("header.0.info2_3")}</span> */}
            </p>

            <p className="text-gray-700 mb-6">{t("header.0.info3")}</p>

            <div className="justify-start md:justify-startspace-x-4  sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  color="primary"
                  className="rounded-md bg-orange-500 text-xs"
                  href="#Pricing"
                  as={Link}
                >
                  {t("button1")}
                </Button>
                <Button
                  color="primary"
                  // href="#5"
                  href="#emailForm"
                  as={Link}
                  className="rounded-md bg-white text-orange-500 !border border-blue-300 "
                >
                  {t("button2")}
                </Button>
                <Button
                  id="langButton"
                  color="primary"
                  className="rounded-md bg-white text-black font-bold absolute p-0 top-5 left-5 z-50"
                  href="#"
                  as={Link}
                  onPress={() => {
                    if (language == "en") {
                      changeLang("ru");
                      setLanguage("ru");
                    } else {
                      changeLang("en");
                      setLanguage("en");
                    }
                  }}
                >
                  {language === "en" ? "RU" : "EN"}

                  {/* <LanguageButton /> */}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto xl:pt-40 lg:pt-32 md:pt-60 lg:max-w-4xl pt-20">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            {t("main.0.caption")}
          </h1>
          <p className="mt-4 text-lg text-slate-700 tracking-tight">
            {t("main.0.1")}
          </p>
          <p className="mt-1 text-lg text-slate-700 tracking-tight">
            {t("main.0.text1")}
          </p>
          <p className="mt-4 text-lg text-slate-700 tracking-tight">
            {t("main.0.2")}
          </p>
          <p className="mt-1 text-lg text-slate-700 tracking-tight">
            {t("main.0.text2")}
          </p>
          <p className="mt-4 text-lg text-slate-700 tracking-tight">
            {t("main.0.3")}
          </p>
          <p className="mt-1 text-lg text-slate-700 tracking-tight">
            {t("main.0.text3")}
          </p>
          <p className="mt-14 text-lg text-slate-700 tracking-tight">
            {t("main.0.checkInfo")}
          </p>
          <ul className="mt-8 text-lg space-y-3 tracking-tight text-slate-700">
            <li className="flex">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8303 15.7951C11.6791 15.5834 11.4514 15.439 11.1954 15.3924C10.9394 15.3459 10.6754 15.401 10.4594 15.546C10.2433 15.6909 10.0923 15.9144 10.0384 16.1689C9.98439 16.4234 10.0317 16.6889 10.1703 16.9091L11.8303 15.7951ZM21.6913 11.7231C21.7863 11.6324 21.8624 11.5238 21.9154 11.4036C21.9684 11.2835 21.9972 11.154 22.0002 11.0227C22.0032 10.8914 21.9803 10.7608 21.9327 10.6384C21.8852 10.5159 21.8141 10.4041 21.7233 10.3091C21.6326 10.2142 21.524 10.138 21.4039 10.085C21.2837 10.032 21.1543 10.0032 21.023 10.0003C20.8917 9.99728 20.7611 10.0202 20.6386 10.0677C20.5162 10.1152 20.4043 10.1864 20.3093 10.2771L21.6913 11.7231ZM14.1153 21.0001L13.2853 21.5571C13.3904 21.7134 13.5375 21.8369 13.7096 21.9133C13.8818 21.9898 14.0721 22.016 14.2585 21.989C14.4449 21.9621 14.6199 21.883 14.7634 21.761C14.9068 21.6389 15.0129 21.4788 15.0693 21.2991L14.1153 21.0001ZM15.0693 21.2991C16.3593 17.1891 18.6083 14.6701 21.6913 11.7231L20.3093 10.2771C17.1573 13.2901 14.6053 16.0971 13.1613 20.7011L15.0693 21.2991ZM10.1693 16.9091L13.2853 21.5571L14.9453 20.4431L11.8313 15.7951L10.1693 16.9091Z"
                  fill="#FF8000"
                />
              </svg>
              <span className="ml-4 text-base">{t("main.0.check1")}</span>
            </li>
            <li className="flex">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8303 15.7951C11.6791 15.5834 11.4514 15.439 11.1954 15.3924C10.9394 15.3459 10.6754 15.401 10.4594 15.546C10.2433 15.6909 10.0923 15.9144 10.0384 16.1689C9.98439 16.4234 10.0317 16.6889 10.1703 16.9091L11.8303 15.7951ZM21.6913 11.7231C21.7863 11.6324 21.8624 11.5238 21.9154 11.4036C21.9684 11.2835 21.9972 11.154 22.0002 11.0227C22.0032 10.8914 21.9803 10.7608 21.9327 10.6384C21.8852 10.5159 21.8141 10.4041 21.7233 10.3091C21.6326 10.2142 21.524 10.138 21.4039 10.085C21.2837 10.032 21.1543 10.0032 21.023 10.0003C20.8917 9.99728 20.7611 10.0202 20.6386 10.0677C20.5162 10.1152 20.4043 10.1864 20.3093 10.2771L21.6913 11.7231ZM14.1153 21.0001L13.2853 21.5571C13.3904 21.7134 13.5375 21.8369 13.7096 21.9133C13.8818 21.9898 14.0721 22.016 14.2585 21.989C14.4449 21.9621 14.6199 21.883 14.7634 21.761C14.9068 21.6389 15.0129 21.4788 15.0693 21.2991L14.1153 21.0001ZM15.0693 21.2991C16.3593 17.1891 18.6083 14.6701 21.6913 11.7231L20.3093 10.2771C17.1573 13.2901 14.6053 16.0971 13.1613 20.7011L15.0693 21.2991ZM10.1693 16.9091L13.2853 21.5571L14.9453 20.4431L11.8313 15.7951L10.1693 16.9091Z"
                  fill="#FF8000"
                />
              </svg>

              <span className="ml-4 text-base">{t("main.0.check2")}</span>
            </li>
            <li className="flex">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8303 15.7951C11.6791 15.5834 11.4514 15.439 11.1954 15.3924C10.9394 15.3459 10.6754 15.401 10.4594 15.546C10.2433 15.6909 10.0923 15.9144 10.0384 16.1689C9.98439 16.4234 10.0317 16.6889 10.1703 16.9091L11.8303 15.7951ZM21.6913 11.7231C21.7863 11.6324 21.8624 11.5238 21.9154 11.4036C21.9684 11.2835 21.9972 11.154 22.0002 11.0227C22.0032 10.8914 21.9803 10.7608 21.9327 10.6384C21.8852 10.5159 21.8141 10.4041 21.7233 10.3091C21.6326 10.2142 21.524 10.138 21.4039 10.085C21.2837 10.032 21.1543 10.0032 21.023 10.0003C20.8917 9.99728 20.7611 10.0202 20.6386 10.0677C20.5162 10.1152 20.4043 10.1864 20.3093 10.2771L21.6913 11.7231ZM14.1153 21.0001L13.2853 21.5571C13.3904 21.7134 13.5375 21.8369 13.7096 21.9133C13.8818 21.9898 14.0721 22.016 14.2585 21.989C14.4449 21.9621 14.6199 21.883 14.7634 21.761C14.9068 21.6389 15.0129 21.4788 15.0693 21.2991L14.1153 21.0001ZM15.0693 21.2991C16.3593 17.1891 18.6083 14.6701 21.6913 11.7231L20.3093 10.2771C17.1573 13.2901 14.6053 16.0971 13.1613 20.7011L15.0693 21.2991ZM10.1693 16.9091L13.2853 21.5571L14.9453 20.4431L11.8313 15.7951L10.1693 16.9091Z"
                  fill="#FF8000"
                />
              </svg>
              <span className="ml-4 text-base">{t("main.0.check3")}</span>
            </li>
            <li className="flex">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8303 15.7951C11.6791 15.5834 11.4514 15.439 11.1954 15.3924C10.9394 15.3459 10.6754 15.401 10.4594 15.546C10.2433 15.6909 10.0923 15.9144 10.0384 16.1689C9.98439 16.4234 10.0317 16.6889 10.1703 16.9091L11.8303 15.7951ZM21.6913 11.7231C21.7863 11.6324 21.8624 11.5238 21.9154 11.4036C21.9684 11.2835 21.9972 11.154 22.0002 11.0227C22.0032 10.8914 21.9803 10.7608 21.9327 10.6384C21.8852 10.5159 21.8141 10.4041 21.7233 10.3091C21.6326 10.2142 21.524 10.138 21.4039 10.085C21.2837 10.032 21.1543 10.0032 21.023 10.0003C20.8917 9.99728 20.7611 10.0202 20.6386 10.0677C20.5162 10.1152 20.4043 10.1864 20.3093 10.2771L21.6913 11.7231ZM14.1153 21.0001L13.2853 21.5571C13.3904 21.7134 13.5375 21.8369 13.7096 21.9133C13.8818 21.9898 14.0721 22.016 14.2585 21.989C14.4449 21.9621 14.6199 21.883 14.7634 21.761C14.9068 21.6389 15.0129 21.4788 15.0693 21.2991L14.1153 21.0001ZM15.0693 21.2991C16.3593 17.1891 18.6083 14.6701 21.6913 11.7231L20.3093 10.2771C17.1573 13.2901 14.6053 16.0971 13.1613 20.7011L15.0693 21.2991ZM10.1693 16.9091L13.2853 21.5571L14.9453 20.4431L11.8313 15.7951L10.1693 16.9091Z"
                  fill="#FF8000"
                />
              </svg>

              <span className="ml-4 text-base">{t("main.0.check4")}</span>
            </li>
            <li className="flex">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8303 15.7951C11.6791 15.5834 11.4514 15.439 11.1954 15.3924C10.9394 15.3459 10.6754 15.401 10.4594 15.546C10.2433 15.6909 10.0923 15.9144 10.0384 16.1689C9.98439 16.4234 10.0317 16.6889 10.1703 16.9091L11.8303 15.7951ZM21.6913 11.7231C21.7863 11.6324 21.8624 11.5238 21.9154 11.4036C21.9684 11.2835 21.9972 11.154 22.0002 11.0227C22.0032 10.8914 21.9803 10.7608 21.9327 10.6384C21.8852 10.5159 21.8141 10.4041 21.7233 10.3091C21.6326 10.2142 21.524 10.138 21.4039 10.085C21.2837 10.032 21.1543 10.0032 21.023 10.0003C20.8917 9.99728 20.7611 10.0202 20.6386 10.0677C20.5162 10.1152 20.4043 10.1864 20.3093 10.2771L21.6913 11.7231ZM14.1153 21.0001L13.2853 21.5571C13.3904 21.7134 13.5375 21.8369 13.7096 21.9133C13.8818 21.9898 14.0721 22.016 14.2585 21.989C14.4449 21.9621 14.6199 21.883 14.7634 21.761C14.9068 21.6389 15.0129 21.4788 15.0693 21.2991L14.1153 21.0001ZM15.0693 21.2991C16.3593 17.1891 18.6083 14.6701 21.6913 11.7231L20.3093 10.2771C17.1573 13.2901 14.6053 16.0971 13.1613 20.7011L15.0693 21.2991ZM10.1693 16.9091L13.2853 21.5571L14.9453 20.4431L11.8313 15.7951L10.1693 16.9091Z"
                  fill="#FF8000"
                />
              </svg>

              <span className="ml-4 text-base">{t("main.0.check5")}</span>
            </li>
          </ul>
          <Link href="#" className="mt-10 font-bold  text-sm text-orange-500">
            {t("main.0.link")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
