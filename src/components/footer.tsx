import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="text-sm text-center text-slate-600 m-20">
      <p className="mb-1">Copyright &#169; 2024 Remotecamp LTD</p>
      <p>
        All rights reserved. Legal{" "}
        <Link className="text-sm" href="/oferta_ru.txt" download>
          Terms of Use
        </Link>{" "}
        rus and{" "}
        <Link className="text-sm" href="/oferta_en.txt" download>
          Terms of Use
        </Link>{" "}
        eng
      </p>
    </div>
  );
};

export default Footer;
