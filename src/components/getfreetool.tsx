import React, { useState, FormEvent } from "react";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Getfreetool: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formVisible, setFormVisible] = useState<boolean>(true);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentTime = new Date().valueOf();
    const lastSubmitTime = localStorage.getItem("loops-form-timestamp");

    if (lastSubmitTime && Number(lastSubmitTime) + 60000 > currentTime) {
      setError("Too many signups, please try again in a little while");
      setFormVisible(false);
      return;
    }

    localStorage.setItem("loops-form-timestamp", String(currentTime));
    setLoading(true);

    const formBody = `userGroup=&mailingLists=&email=${encodeURIComponent(
      email
    )}`;

    fetch(
      "https://app.loops.so/api/newsletter-form/clmdyx6lj008smn0pednse60p",
      {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => {
        console.log("Response status:", res.status);
        if (res.ok) {
          return res.json().then(() => {
            setSuccess(true);
            setEmail("");
            console.log(res);
          });
        } else {
          return res.json().then((data) => {
            setError(data.message ? data.message : res.statusText);
          });
        }
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          setError(
            "Слишком много подписок, попробуйте еще раз через некоторое время"
          );
        } else {
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
        setFormVisible(false);
      });
  };

  const resetFormHandler = () => {
    setError("");
    setSuccess(false);
    setFormVisible(true);
  };

  return (
    <div className="bg-orange-500 px-4 py-20 gap-y-12 xl:py-32 w-full relative items-end grid grid-cols-1 lg:grid-cols-2 mt-14 sm:px-10 md:px-28 xl:px-80">
      <div>
        <h1 className="text-5xl text-white font-extrabold tracking-tight sm:text-6xl lg:w-auto md:w-2/3 sm:w-3/4">
          {t("pricing.0.formTitle")}
        </h1>
      </div>
      <div className="lg:pl-16">
        <h3 className="text-white">{t("pricing.0.formLink")}</h3>

        {formVisible ? (
          <>
            {/* Десктопная версия формы */}
            <form
              onSubmit={submitHandler}
              className="border-1 border-white hidden sm:grid grid-cols-2 rounded-xl mt-5"
            >
              <input
                type="email"
                required
                placeholder={t("pricing.0.emailPlacegolder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-orange-500 px-1 py-2 text-white focus:outline-none m-2"
              />
              <Button
                color="primary"
                type="submit"
                className="bg-white text-orange-500 hover:opacity-40 active:bg-blue-50 m-2"
                disabled={loading}
              >
                {loading ? "Please wait..." : t("pricing.0.formButton")}
              </Button>
            </form>

            {/* Мобильная версия формы */}
            <form onSubmit={submitHandler} className="sm:hidden grid w-full">
              <input
                type="email"
                required
                placeholder={t("pricing.0.emailPlacegolder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-orange-500 px-1 py-2 text-white focus:outline-none mt-2 border-1 border-white rounded-md border-opacity-30 h-12"
              />
              <Button
                color="primary"
                type="submit"
                radius="sm"
                className="bg-white text-orange-500 hover:opacity-40 active:bg-blue-50 mt-2"
                disabled={loading}
              >
                {loading ? "Please wait..." : t("pricing.0.formButton")}
              </Button>
            </form>
          </>
        ) : success ? (
          <div
            className="newsletter-success"
            style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }}
          >
            Thanks! We'll be in touch!
          </div>
        ) : (
          <div
            className="newsletter-error"
            style={{ color: "rgb(185, 28, 28)", fontSize: "16px" }}
          >
            {error || "Oops! Something went wrong, please try again"}
          </div>
        )}

        {!formVisible && (
          <button
            type="button"
            className="newsletter-back-button"
            onClick={resetFormHandler}
            style={{
              color: "#6b7280",
              fontSize: "14px",
              margin: "10px auto",
              textAlign: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            &larr; Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Getfreetool;
