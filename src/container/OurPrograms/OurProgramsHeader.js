import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../../public/img/overview-header-bg.png";
import blurBg from "../../../public/img/overview-header-bg-blur.png";
import grainBg from "../../../public/img/grain.png";
import { useTranslation } from "next-i18next";

function OurProgramsHeader(props) {
  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`OUR_PROGRAMS_HEADER.${str}`, {
      ns: "OurPrograms",
      returnObjects: true,
      ...params,
    });
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative z-[1] h-[100vh] max-h-[938px] overflow-hidden bg-main-bg">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 z-[-1] opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bottom-auto flex h-full w-full items-center justify-center">
        <Image
          src={blurBg}
          alt=""
          className="absolute inset-0 bottom-auto h-full w-full object-fill"
        />

        <Image
          src={bg}
          alt=""
          className="absolute h-full max-h-[628px] object-contain mix-blend-color-dodge max-md:max-h-[559px] max-md:object-cover"
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto flex h-full w-11/12 items-center justify-center">
        <div className="content">
          <div
            className="bg-bgheader flex h-auto w-full items-center justify-center bg-contain bg-no-repeat md:bg-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="z-10 text-center">
              {t("TITLE")
                .split("\n")
                .map((item, index) => (
                  <h4
                    key={index}
                    className="bg-gradient-title from-40% to-neutral-900 bg-clip-text text-[80px] leading-[77px] text-transparent max-xl:text-[40px] max-xl:leading-[54px]"
                  >
                    {item}
                  </h4>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProgramsHeader;
