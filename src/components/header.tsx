import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header className="w-full min-w-full">
      <div className="top-0 bg-slate-100 flex w-[100vw] h-[180vw] sm:h-[100vw] md:h-[80vw] lg:h-56 items-end lg:items-center lg:justify-end justify-center">
        <div className="w-[50vw]">
          <div className="flex justify-center md:justify-start sm:pb-2 pb-36 mb-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-blue-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-blue-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-blue-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-blue-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-blue-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p className="text-slate-900 font-bold mb-2 text-center md:text-start absolute m-auto left-7 right-7 top-2/3 sm:top-auto sm:right-auto sm:left-auto sm:static">
            “This step by step is genius. I wish I had known this guide a lot
            sooner.”
          </p>
          <p className="text-slate-400 mb-6 text-center md:text-start absolute m-auto left-7 right-7 top-3/4 sm:top-auto sm:right-auto sm:left-auto sm:static">
            <span className="text-blue-500">{t("top.0.topName")}</span>{" "}
            {t("top.0.topDescription")}
          </p>
        </div>
      </div>
      <div className="container mx-auto p-2 md:p-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          <div className="absolute z-50 flex justify-center -translate-x-1/2  -translate-y-1/2 left-1/2 right-1/2 lg:right-auto lg:left-auto lg:-translate-x-0 lg:-translate-y-0 lg:ml-28  top-52 lg:top-32 w-64 md:w-96 lg:w-[30vw]">
            <img
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=/_next/static/media/cover.8d0bf130.png&w=1920&q=75"
              alt=""
              className="w-64 md:w-80 lg:w-[30vw]"
            />
          </div>
          <div></div>

          <div className="h-2/4 xl:h-full lg:h-3/4 absolute top-0 -bottom-12 left-0  lg:right-[80vw] md:right-[70vw] right-2/4 z-10 rounded-br-3xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-[5vw] md:-inset-y-[10vw] lg:left-[-100vw] ">
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
            <h1 className=" text-6xl md:text-6xl font-bold mb-4 ">
              {/* Get your first client. */}
              {t("text")}
            </h1>
            <p className="text-gray-700 mb-6">
              A complete step by step guide to get your first client as a
              freelancer from scratch.
            </p>

            <div className="flex justify-start md:justify-start space-x-4">
              <Button
                color="primary"
                className="rounded-md"
                href="#7"
                as={Link}
              >
                Get free tools
              </Button>
              <Button
                color="primary"
                href="#5"
                as={Link}
                className="rounded-md bg-white text-blue-600 !border border-blue-300 "
              >
                Buy the guide
              </Button>
              <Button
                id="langButton"
                color="primary"
                className="rounded-md"
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
                {language === "en" ? "Switch to Russian" : "Switch to English"}
              </Button>
            </div>
            <div className="mt-24">
              <img
                src="https://getyourfirstclient.freelancerpath.com/_next/image?url=https%3A%2F%2Fapi.producthunt.com%2Fwidgets%2Fembed-image%2Fv1%2Ftop-post-badge.svg%3Fpost_id%3D366162%26theme%3Dlight%26period%3Ddaily&w=640&q=75"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mx-auto xl:pt-96 lg:pt-72 md:pt-60 lg:max-w-4xl pt-20">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            “How to get your first client” is a guide that prepares you to
            become a freelancer and get your first client.
          </h1>
          <p className="mt-4 text-lg text-slate-700 tracking-tight">
            Freelancing can be hard, especially when you are starting. It
            requires skill, dedication, and a thick skin. If you want to become
            a successful freelancer, you have to be prepared to put in the hard
            work. You can’t just expect good things to happen if you put no
            effort into your freelance business. You need to take deliberate,
            strategic steps to make your business a success.
          </p>
          <p className="mt-4 text-lg text-slate-700 tracking-tight">
            I’ve experienced ten years of freelancing. It has been a wild ride
            exploring different niches, experimenting with content marketing and
            blogging, and discovering what works best for me. It’s been a
            rewarding journey that has enabled me to create a career I love.
            Throughout my freelance journey, I’ve made quite a few mistakes and
            learned a lot. In this guide, I wanted to share all tips that would
            have helped me when I was starting. Whether you are new to
            freelancing or have been doing it for a while, these tips can help
            you create a more successful career.
          </p>
          <p className="mt-4 text-lg text-slate-700 tracking-tight">
            In this guide, you will learn how to:
          </p>
          <ul className="mt-8 text-lg space-y-3 tracking-tight text-slate-700">
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">
                be organize to start your freelance business
              </span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">
                decide on what to offer as a freelancer
              </span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">polish your skills</span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">create your personal brand</span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">
                get testimonials and use them to get clients
              </span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">create your services</span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">price your services</span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">market your services</span>
            </li>
            <li className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
              </svg>
              <span className="ml-4">get your first client</span>
            </li>
          </ul>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            By the end of this guide, you will have a clear idea of how to start
            your freelance business and get your first client. If you are ready,
            let’s get started.
          </p>
          <Link href="#" className="mt-10">
            Get free one pre-made tool straight to your inbox →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
