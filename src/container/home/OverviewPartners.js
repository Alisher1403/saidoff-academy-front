import React, { useEffect, useState } from "react";
import Image from "next/image";
import grainBg from "../../../public/img/grain.png";
import bg from "../../../public/img/overview-partners-bg.png";
import cubeBg from "../../../public/img/cube.png";
import { InView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";

function OverviewPartners({ partners }) {
  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`OVERVIEW_PARTNERS.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  return (
    <div className="relative bg-main-bg py-[100px] max-md:py-14">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute top-0 z-[1] w-full overflow-x-hidden">
        <Image
          src={bg}
          alt="Background Image"
          className="w-full min-w-[1440px]"
        />
      </div>

      <div className="container relative z-10 mx-auto w-11/12 overflow-hidden">
        {/* Main Content */}
        <div className="content">
          <div className="flex justify-center">
            <Image
              src={cubeBg}
              data-aos="fade-up-left"
              alt="Cube Background"
              className="absolute right-0 h-[114px] w-[109px] max-md:h-[82px] max-md:w-[78px] lg:right-[330px]"
            />
            <h4
              className="mb-8 mt-2 text-center font-semibold text-white max-md:text-[clamp(35px,7vw,72px)] lg:text-[64px]"
              data-aos="zoom-in"
            >
              {t("TITLE")}
            </h4>
          </div>

          {/* Subtitle */}
          <p
            className="mx-auto mb-[87px] max-w-[631px] text-center text-[22px] leading-7 text-white max-xl:mb-10 max-xl:text-[18px] max-md:hidden"
            data-aos="zoom-out"
          >
            {t("SUBTITLE")}
          </p>

          {/* Partners List */}
          <div className="partners-list grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-md:gap-2">
            {partners?.map((item, index) => {
              const even = index % 2 === 0;

              return (
                <InView
                  key={index}
                  as="div"
                  threshold={0.5}
                  rootMargin={even ? "-20%" : "-25%"}
                >
                  {({ inView, ref }) => {
                    return (
                      <div
                        ref={ref}
                        className="partner group relative flex aspect-[7/4] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white border-opacity-[6%] bg-white bg-opacity-[7%] backdrop-blur-[10px] duration-[200ms] max-md:rounded-[12px] md:hover:border-opacity-[10%] md:hover:bg-opacity-[30%]"
                      >
                        <div className="icons-wrapper relative flex h-1/2 w-[70%] items-center justify-center">
                          <Image
                            src={item?.image}
                            layout="fill"
                            alt={`Partner ${index + 1}`}
                            className={`h-full w-full object-contain brightness-150 grayscale duration-300 group-hover:brightness-100 md:group-hover:grayscale-0 ${inView && "max-md:brightness-100 max-md:grayscale-0"}`}
                          />

                          {/* Image Background */}
                          <Image
                            src={item.image}
                            layout="fill"
                            alt={`Partner ${index + 1} Background`}
                            className={`absolute z-[-1] h-full w-full scale-[1.3] object-contain opacity-0 blur-[25px] duration-300 md:group-hover:opacity-100 ${inView && "max-md:opacity-100"}`}
                          />
                        </div>
                      </div>
                    );
                  }}
                </InView>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPartners;
