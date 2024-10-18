import { useTranslation } from "react-i18next";
import AuthorAnton from "../assets/Anton.jpg";
import Telegram from "../assets/telegram";
import { Link, Image } from "@nextui-org/react";
const Author = () => {
  const { t } = useTranslation();
  return (
    <div id="Author" className="section max-w-5xl pt-44 mx-auto sm:px-6">
      <div className="flex justify-end -mt-16 h-44 w-44 rounded-full md:float-right float-left md:h-64 md:w-64 lg:mr-20 lg:h-72 lg:w-72">
        <Image
          className=" h-44 w-44 rounded-full md:float-right float-left md:h-64 md:w-64  lg:h-72 lg:w-72"
          src={AuthorAnton}
          alt=""
        />
      </div>
      <div className="bg-slate-50 p-5 sm:p-20 rounded-3xl">
        <div className="sm:inline-flex flex w-full sm:w-16 pt-10">
          <h2 className="inline-flex text-orange-500 border-solid border-2 border-orange-500 px-4 py-1 rounded-full">
            {t("author.0.caption")}
          </h2>
        </div>

        <div className="mt-8">
          <h1 className="text-5xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
            <span className="text-orange-500">{t("author.0.name")}</span>
            {t("author.0.textAfterName")}
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-slate-700 text-lg">{t("author.0.info")}</p>
        </div>
        <div className="mt-8 flex items-center">
          <Telegram />

          <Link
            className="text-orange-500 ml-2"
            href="https://t.me/bizdevacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's connect on Telegram!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
