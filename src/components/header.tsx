import { Button, Link } from "@nextui-org/react";
const Header = () => {
  return (
    <header className="w-full min-w-full">
      <div className="container mx-auto p-2 md:p-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-50 flex justify-center w-64 md:w-80 lg:w-[30vw]">
            <img
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=/_next/static/media/cover.8d0bf130.png&w=1920&q=75"
              alt=""
              className="w-64 md:w-80 lg:w-[30vw]"
            />
          </div>

          <div className="h-full  absolute  -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-3xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full ">
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

          <div className="sm:text-center md:text-left ">
            <p className="text-blue-600 font-bold mb-2">
              “This step by step is genius. I wish I had known this guide a lot
              sooner.”
            </p>
            <p className="text-gray-700 mb-6">
              — Michael Montoya, Freelance Designer
            </p>
            <h1 className=" text-6xl md:text-4xl font-bold mb-4 ">
              Get your first client.
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
            </div>
            <div className="mt-24">
              {/* <span className="bg-white border border-orange-300 text-orange-600 px-5 py-2 rounded-lg font-semibold flex flex-col w-60 items-start w-45">
                <span className="flex text-xs">Product hunt</span>
                <span className="flex text-sm">#5 Product of the Day</span>
              </span> */}
              <img
                src="https://getyourfirstclient.freelancerpath.com/_next/image?url=https%3A%2F%2Fapi.producthunt.com%2Fwidgets%2Fembed-image%2Fv1%2Ftop-post-badge.svg%3Fpost_id%3D366162%26theme%3Dlight%26period%3Ddaily&w=640&q=75"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mx-auto lg:pt-32 lg:max-w-4xl pt-20">
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
