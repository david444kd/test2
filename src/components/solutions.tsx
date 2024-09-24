import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div id="Solutions" className="section">
        <div className="mt-24 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
          <div>
            <h2 className=" inline-flex text-orange-500 border-solid border-2 border-orange-500 px-4 py-1 rounded-full">
              {t("modules.0.caption")}
            </h2>
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">
              {t("modules.0.title")}
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-slate-700 text-lg">{t("modules.0.text")}</p>
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 sm:gap-y-10 gap-x-8 xl:divide-x xl:-mx-12">
            <div className="mt-8 xl:px-12">
              <h2 className="text-slate-900 font-medium">
                {t("modules.0.heading1")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("modules.0.heading1text")}
              </p>
            </div>
            <div className="mt-8 xl:px-12">
              <h2 className="text-slate-900 font-medium">
                {t("modules.0.heading2")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("modules.0.heading2text")}
              </p>
            </div>
            <div className="mt-8 xl:px-12">
              <h2 className="text-slate-900 font-medium">
                {t("modules.0.heading3")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("modules.0.heading3text")}
              </p>
            </div>

            <div className="mt-8 xl:px-12">
              <h2 className="text-slate-900 font-medium">
                {t("modules.0.heading4")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("modules.0.heading4text")}
              </p>
            </div>
            <div className="mt-8 xl:px-12">
              <h2 className="text-slate-900 font-medium">
                {t("modules.0.heading5")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("modules.0.heading5text")}
              </p>
            </div>
            <div className="mt-8 xl:px-12">
              <h2 className="text-slate-900 font-medium">
                {" "}
                {t("modules.0.heading6")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("modules.0.heading6text")}
              </p>
            </div>
          </div>
          <div className="mb-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
