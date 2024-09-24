import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
const Getfreetool = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-orange-500 px-4 py-20 gap-y-12  xl:py-32 w-full relative items-end grid grid-cols-1 lg:grid-cols-2 mt-14 sm:px-10 md:px-28 xl:px-80">
      <div className="">
        <h1 className="text-5xl text-white font-extrabold tracking-tight sm:text-6xl  lg:w-auto md:w-2/3 sm:w-3/4">
          {t("pricing.0.formTitle")}
        </h1>
      </div>
      <div className="lg:pl-16">
        <h3 className="text-white">{t("pricing.0.formLink")}</h3>

        <form className="border-1 border-white hidden sm:grid grid-cols-2 rounded-xl mt-5">
          <input
            type="email"
            required
            placeholder={t("pricing.0.emailPlacegolder")}
            className="w-full bg-orange-500 px-1 py-2 text-white focus:outline-none m-2"
          />
          <Button
            color="primary"
            type="submit"
            className="bg-white text-orange-500 hover:opacity-40 active:bg-blue-50 m-2"
          >
            {t("pricing.0.formButton")}
          </Button>
        </form>
        <form className="sm:hidden grid w-full">
          <input
            type="email"
            required
            placeholder={t("pricing.0.emailPlacegolder")}
            className="w-full bg-orange-500 px-1 py-2 text-white focus:outline-none mt-2 border-1 border-white rounded-md border-opacity-30 h-12"
          />
          <Button
            color="primary"
            type="submit"
            radius="sm"
            className="bg-white text-orange-500 hover:opacity-40 active:bg-blue-50 mt-2"
          >
            {t("pricing.0.formButton")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Getfreetool;
