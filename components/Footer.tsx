import Link from "next/link";
import { socialMedia } from "@/app/data";
import CopyEmailButton from "./CopyEmailButton";
import MagicButton from "./ui/magic-button";
import { FaDownload } from "react-icons/fa6";

const EMAIL = "sherif.monir.badreddin@gmail.com";

const Footer = () => {
  return (
    <footer className="w-full mb-20" id="contact">
      <div className="pointer-events-none w-full absolute left-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[40vw]">
          Looking for a junior front-end developer?
        </h1>
        <p className="text-white-200  my-5 text-center">
          I&apos;m open to entry-level front-end roles. Send me a message or grab my resumé.
        </p>

        <p className="flex  items-center justify-center gap-2">
          <span>Email:</span>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:underline underline-offset-4 transition-colors hover:text-[#CBACF9]"
          >
            {EMAIL}
          </a>
          <CopyEmailButton email={EMAIL} />
        </p>
        <a
          href="/Sherif_Monir_Frontend_Developer_Resume.pdf"
          download="Sherif_Monir_Frontend_Developer_Resume.pdf"
        >
          <MagicButton title={"Download Resumé"} icon={<FaDownload />}  position={"right"} />
  
        </a>
      </div>

      <div className="relative z-10 flex mt-6 gap-15 flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia?.map((info) => {
            if (!info) return null;
            return (
              <Link
                href={info.link}
                key={info.id}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            );
          })}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Sherif Monir
        </p>
      </div>
    </footer>
  );
};

export default Footer;