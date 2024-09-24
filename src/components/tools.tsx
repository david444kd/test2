import { useTranslation } from "react-i18next";
const Tools = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-16 section" id="Tools and Templates">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <div>
          <h2 className=" inline-flex text-orange-500 border-solid border-2 border-orange-500 px-4 py-1 rounded-full">
            {t("materials.0.caption")}
          </h2>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-serif">
            {t("materials.0.title")}
          </h1>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          <div className="mt-8">
            <div></div>
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproposal.223863b7.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">01</h3>
            <h2 className="text-slate-900 font-medium">
              {t("materials.0.heading1")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("materials.0.heading1text")}
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontract.1b086f9c.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">02</h3>
            <h2 className="text-slate-900 font-medium">
              {t("materials.0.heading2")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("materials.0.heading2text")}
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvoice.52baa94c.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">03</h3>
            <h2 className="text-slate-900 font-medium">
              {t("materials.0.heading3")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("materials.0.heading3text")}
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject.841bf686.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">04</h3>
            <h2 className="text-slate-900 font-medium">
              {t("materials.0.heading4")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("materials.0.heading4text")}
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomer.b32762bd.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">05</h3>
            <h2 className="text-slate-900 font-medium">
              {t("materials.0.heading5")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("materials.0.heading5text")}
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fongoing.5c6d364c.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">06</h3>
            <h2 className="text-slate-900 font-medium">
              {t("materials.0.heading6")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("materials.0.heading6text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
