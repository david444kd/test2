import { Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import Getfreetool from "./getfreetool";
import { useState } from "react";
import PaymentModal from "./pricingModal/PricingModal";

const Pricing = () => {
  const { t } = useTranslation();
  const [modalAmount, setModalAmount] = useState<number | null>(null);
  return (
    <div id="Pricing" className="section">
      <div className="md:mt-32 pt-16 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <div>
          <h2 className=" inline-flex text-orange-500 border-solid border-2 border-orange-500 px-4 py-1 rounded-full">
            {t("pricing.0.caption")}
          </h2>
        </div>
        <div className="mt-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight font-serif">
            {t("pricing.0.title")}
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-slate-600 text-lg max-w-xl">
            {t("pricing.0.infoText")}
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16 lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-3xl md:px-8 md:pt-16 lg:p-20">
          <Card className="flex flex-col bg-slate-50 shadow-none px-4 py-16 sm:rounded-3xl sm:px-10 md:py-12 lg:px-12">
            <CardBody>
              <div className="flex">
                <p className="text-slate-500">$</p>
                <p className="text-slate-900 text-7xl ml-1 mt-1 font-bold tracking-tight">
                  149
                </p>
              </div>
              <h3 className="text-slate-900 font-semibold mt-7 text-lg">
                {t("pricing.0.firstCardCaption")}
              </h3>
              <p className="text-lg text-slate-600 mt-2">
                {t("pricing.0.firstCardText")}
              </p>
              <a
                // href="https://go.greatleads.ru/book_payment_149"
                target="_blanc"
              >
                <Button
                  onClick={() => setModalAmount(149)}
                  color="primary"
                  className="bg-slate-900 hover:opacity-40 mt-8 text-xs"
                >
                  {t("pricing.0.firstCardButton")}
                </Button>
              </a>
              <ul className="mt-8 divide-y divide-slate-200">
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-slate-600"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p>{t("pricing.0.firstCardCheck1")}</p>
                </li>
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-slate-600"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p>{t("pricing.0.firstCardCheck2")}</p>
                </li>
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-slate-600"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p>{t("pricing.0.firstCardCheck3")}</p>
                </li>
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-slate-600"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p>{t("pricing.0.firstCardCheck4")}</p>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className="flex flex-col bg-orange-500 px-4 py-16 sm:rounded-3xl sm:px-10 md:py-12 lg:px-12">
            <CardBody>
              <div className="flex">
                <p className="text-blue-200">$</p>
                <p className="text-white text-7xl ml-1 mt-1 font-bold">249</p>
                <p className="mt-1 ml-3 text-5xl text-white line-through text-opacity-90">
                  599
                </p>
              </div>
              <h3 className="text-white font-semibold mt-7 text-lg">
                {t("pricing.0.secondCardCaption")}
              </h3>
              <p className="text-lg text-white mt-2">
                {t("pricing.0.secondCardText")}
              </p>
              <a
                // href="https://go.greatleads.ru/book_payment_249"
                target="_blank"
              >
                <Button
                  onClick={() => setModalAmount(249)}
                  // href="https://go.greatleads.ru/book_payment_249"
                  color="primary"
                  target="_blank"
                  className="bg-white text-orange-500 hover:opacity-40 mt-8 text-xs"
                >
                  {t("pricing.0.secondCardButton")}
                </Button>
              </a>
              <ul className="mt-8 divide-y divide-white">
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-white"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p className="text-white">
                    {t("pricing.0.secondCardCheck1")}
                  </p>
                </li>
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-white"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p className="text-white">
                    {t("pricing.0.secondCardCheck2")}
                  </p>
                </li>
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-white"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p className="text-white">
                    {t("pricing.0.secondCardCheck3")}
                  </p>
                </li>
                <li className="flex py-2">
                  <svg
                    aria-hidden="true"
                    className="flex-none w-8 h-8 fill-white"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <p className="text-white">
                    {t("pricing.0.secondCardCheck4")}
                  </p>
                </li>
                <p
                  id="emailForm"
                  className="flex justify-center text-white mt-7"
                >
                  {t("pricing.0.footer")}
                </p>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
      {modalAmount && (
        <PaymentModal
          amount={modalAmount}
          onClose={() => setModalAmount(null)}
        />
      )}
      <Getfreetool></Getfreetool>
    </div>
  );
};

export default Pricing;
