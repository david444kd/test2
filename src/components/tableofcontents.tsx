import { useState } from "react";
import { Card, CardBody, User } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import AntonImg from "../assets/Anton.jpg";
const Tableofcontents = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(false);
  const [knopka, setKnopka] = useState(true);
  return (
    <div id="Table of contents" className="section">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 py-16 scroll-smooth">
        <div>
          <h2 className=" inline-flex text-orange-500 border-solid border-2 border-orange-500 px-4 py-1 rounded-full">
            {t("description.0.caption")}
          </h2>
        </div>
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t("description.0.text")}
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-slate-700 text-lg">{t("description.0.about")}</p>
        </div>

        <ol className=" mt-16 space-y-10 sm:space-y-16">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            {t("description.0.card1Title")}
          </h3>
          <Card className="bg-slate-50 shadow-none">
            <CardBody>
              <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                <li className="py-4">
                  <span>{t("description.0.card1Chech1")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card1Chech2")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card1Chech3")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card1Chech4")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card1Chech5")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card1Chech6")}</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            {t("description.0.card2Title")}
          </h3>
          <Card className="bg-slate-50 shadow-none">
            <CardBody>
              <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                <li className="py-4">
                  <span>{t("description.0.card2Chech1")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card2Chech2")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card2Chech3")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card2Chech4")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card2Chech5")}</span>
                </li>
                <li className="py-4">
                  <span>{t("description.0.card2Chech6")}</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          {count && (
            <ol className=" mt-16 space-y-10 sm:space-y-16">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {t("description.0.card3Title")}
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>{t("description.0.card3Chech1")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card3Chech2")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card3Chech3")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card3Chech4")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card3Chech5")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card3Chech6")}</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {t("description.0.card4Title")}
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>{t("description.0.card4Chech1")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card4Chech2")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card4Chech3")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card4Chech4")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card4Chech5")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card4Chech6")}</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {t("description.0.card5Title")}
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>{t("description.0.card5Chech1")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card5Chech2")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card5Chech3")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card5Chech4")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card5Chech5")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card5Chech6")}</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {t("description.0.card6Title")}
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>{t("description.0.card6Chech1")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card6Chech2")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card6Chech3")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card6Chech4")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card6Chech5")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card6Chech6")}</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {t("description.0.card7Title")}
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>{t("description.0.card7Chech1")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card7Chech2")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card7Chech3")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card7Chech4")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card7Chech5")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card7Chech6")}</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {t("description.0.card8Title")}
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>{t("description.0.card8Chech1")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card8Chech2")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card8Chech3")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card8Chech4")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card8Chech5")}</span>
                    </li>
                    <li className="py-4">
                      <span>{t("description.0.card8Chech6")}</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </ol>
          )}
        </ol>
        {knopka && (
          <div className="flex justify-center mt-10">
            <button
              className="text-slate-900 hover:text-slate-700 font-medium"
              onClick={() => {
                setCount(true);
                setKnopka(false);
              }}
            >
              See more &darr;
            </button>
          </div>
        )}
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
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:r7:)"></rect>
        </svg>
        <div className="sm:flex sm:justify-center sm:items-center sm:flex-col py-14 sm:py-32 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2 relative">
          <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p className="text-slate-900 mt-10 text-4xl tracking-tight">
            {t("description.0.message")}
          </p>
          <User
            id="Founder"
            className="mt-10 w-3/4 justify-start sm:justify-center"
            name="Anthony Minkowski"
            description="Book author"
            avatarProps={{
              src: AntonImg,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tableofcontents;
