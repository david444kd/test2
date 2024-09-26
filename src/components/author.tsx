import { useTranslation } from "react-i18next";
import AuthorAnton from "../assets/Anton.jpg";
const Author = () => {
  const { t } = useTranslation();
  return (
    <div id="Author" className="section max-w-5xl pt-44 mx-auto sm:px-6">
      <img
        className="-mt-16 h-44 w-44 rounded-full md:float-right float-left md:h-64 md:w-64 lg:mr-20 lg:h-72 lg:w-72"
        src={AuthorAnton}
        alt=""
      />
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
          <svg className="fill-orange-500 w-10 h-10">
            <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path>
          </svg>

          <a
            className="text-orange-500 ml-2"
            href="https://twitter.com/yunuserturk"
          >
            Let’s be friends on Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
