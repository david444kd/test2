import { User } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
const Problems = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div id="Problems" className="section">
        <div className="mt-24 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
          <div>
            <h2 className=" inline-flex text-blue-600 border-solid border-2 border-blue-600 px-4 py-1 rounded-full">
              {t("cases.0.caption")}
            </h2>
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">
              {t("cases.0.title")}
            </h1>
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">01</h3>
              <h2 className="text-slate-900 font-medium">
                {t("cases.0.case1caption")}
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                {t("cases.0.case1companies")}
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">02</h3>
              <h2 className="text-slate-900 font-medium">
                {t("cases.0.case2caption")}
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                {t("cases.0.case2companies")}
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">03</h3>
              <h2 className="text-slate-900 font-medium">
                {t("cases.0.case3caption")}
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                {t("cases.0.case3companies")}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 h-1/2 mt-40 relative">
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full opacity-20"
          >
            <defs>
              <pattern
                id=":r7:"
                width="128"
                height="128"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 80)"
              >
                <path
                  d="M0 128V.5H128"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:r7:)"></rect>
          </svg>

          <div className="sm:flex sm:justify-center sm:items-center sm:flex-col py-14 sm:py-32 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2 relative">
            <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <p className="text-slate-900 mt-10 text-4xl tracking-tight">
              {t("cases.0.message")}
            </p>
            <User
              className="mt-10 w-3/4 justify-start sm:justify-center"
              name="Ukeme Booker"
              description="Freelance UI/UX Designer"
              avatarProps={{
                src: "https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.d51dcef5.png&w=256&q=75",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
