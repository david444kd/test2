import { useState } from "react";
import { Card, CardBody, User } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
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
            {t("description.0.module1")}
          </h3>
          <Card className="bg-slate-50 shadow-none">
            <CardBody>
              <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                <li className="py-4">
                  <span>Getting started</span>
                </li>
                <li className="py-4">
                  <span>First Step and Decision</span>
                </li>
                <li className="py-4">
                  <span>How is The Process</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            {t("description.0.module2")}
          </h3>
          <Card className="bg-slate-50 shadow-none">
            <CardBody>
              <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                <li className="py-4">
                  <span>Equipments</span>
                </li>
                <li className="py-4">
                  <span>Skills</span>
                </li>
                <li className="py-4">
                  <span>Tools</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          {count && (
            <ol className=" mt-16 space-y-10 sm:space-y-16">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Personal Branding
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>Branding</span>
                    </li>
                    <li className="py-4">
                      <span>Build Audience</span>
                    </li>
                    <li className="py-4">
                      <span>Portfolio</span>
                    </li>
                    <li className="py-4">
                      <span>Testimonials</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Business Model
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>Services</span>
                    </li>
                    <li className="py-4">
                      <span>Pricing</span>
                    </li>
                    <li className="py-4">
                      <span>Productized Services</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Marketing
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>Publicize</span>
                    </li>
                    <li className="py-4">
                      <span>Be Visible</span>
                    </li>
                    <li className="py-4">
                      <span>Content Creating</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Tips
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>Actionable Tips</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Conclusion
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>Conclusion</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Tools and Templates
              </h3>
              <Card className="bg-slate-50 shadow-none">
                <CardBody>
                  <ul className="sm:py-4 sm:px-4 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-4">
                      <span>Proposal Template</span>
                    </li>
                    <li className="py-4">
                      <span>Contract Template</span>
                    </li>
                    <li className="py-4">
                      <span>Invoice Template</span>
                    </li>
                    <li className="py-4">
                      <span>Project Management Tool</span>
                    </li>
                    <li className="py-4">
                      <span>Customer Management Tool</span>
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
            className="mt-10 w-3/4 justify-start sm:justify-center"
            name="Ayush Chaturvedi"
            description="Indie Creator"
            avatarProps={{
              src: "https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fayush.4d3df2d5.jpeg&w=828&q=75",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tableofcontents;
