import React, { useEffect } from "react";
import grainBg from "../../../public/img/grain.png";
import Image from "next/image";
import star4 from "/public/Image/abstract41g.png";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

function OverviewChoose({ whyUs }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  function t(str, params) {
    return translate(`OVERVIEW_CHOOSE.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  return (
    <div className="relative bg-main-bg py-[100px] max-md:py-10">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      <div className="container relative z-10 mx-auto w-11/12">
        {/* ===== MAIN CONTENT ===== */}
        <div className="content">
          {/* title */}
          <div className="flex justify-center">
            <div className="relative inline-block">
              <Image
                src={star4}
                className="absolute -left-[10%] z-[-1] saturate-0 max-md:w-[72px]"
              />
              <h4 className="mb-6 bg-gradient-title bg-clip-text text-center text-[64px] font-semibold leading-[1] tracking-[1%] text-transparent max-xl:mb-8 max-xl:text-[46px]">
                {t("TITLE")}
              </h4>
            </div>
          </div>

          {/* subtitle */}
          <p className="mx-auto mb-[87px] max-w-[614px] text-center text-[22px] leading-7 text-white max-xl:mb-10 max-xl:text-[18px]">
            {t("SUBTITLE")}
          </p>

          {/* ==== CARDS ==== */}
          <div className="flex grid-cols-2 items-stretch justify-center gap-7 overflow-hidden max-xl:gap-3 max-[800px]:grid">
            {whyUs?.slice(-3)?.map((item, index) => (
              <div
                key={index}
                className="card group grid w-full grid-rows-2 overflow-hidden rounded-[24px] border border-stone-500 bg-white bg-opacity-[5%] backdrop-blur-[20px] duration-300 first:col-span-2 max-md:flex max-md:flex-col xl:w-[281px] xl:min-w-[281px] xl:hover:w-[574px]"
              >
                {/* == CARD IMAGE == */}
                <div className="img-wrapper relative row-span-1 h-[410px] p-3 duration-300 max-xl:h-[300px] max-md:h-[258px] max-md:group-hover:rounded-none xl:group-hover:p-0">
                  <div className="relative h-full w-full overflow-hidden rounded-t-[15px] border border-white border-opacity-70 duration-300 xl:grayscale xl:group-hover:rounded-none group-hover:xl:border-none group-hover:xl:grayscale-0">
                    <Image
                      src={item?.image}
                      layout="fill"
                      alt=""
                      objectFit="cover"
                      className="h-full w-full"
                    />
                  </div>
                </div>

                {/* == CARD CONTENT == */}
                <div className="card-content-wrapper relative row-span-2 overflow-hidden">
                  {/* card-active-main-content */}
                  <div className="card-content inset-0 h-full overflow-hidden px-10 pb-14 pt-12 group-hover:visible group-hover:opacity-100 group-hover:duration-300 max-xl:px-3 max-xl:pt-3 max-md:pb-8 xl:collapse xl:w-[574px] xl:opacity-0">
                    {/* title */}
                    <h1 className="mb-8 overflow-hidden text-ellipsis text-center text-[32px] leading-[40px] text-white max-xl:text-[16px] max-xl:leading-8 max-md:mb-5">
                      {item?.[`title_${lang}`]}
                    </h1>

                    {/* description */}
                    <p className="overflow-hidden text-ellipsis text-center text-[18px] uppercase leading-8 text-white max-xl:text-[12px] max-xl:leading-6 max-md:line-clamp-5 xl:px-5">
                      {item?.[`description_${lang}`]}
                    </p>
                  </div>

                  {/* card not-active title */}
                  <div className="visible absolute top-0 flex h-full w-full items-center justify-center opacity-100 delay-200 duration-300 group-hover:collapse group-hover:opacity-0 group-hover:delay-0 group-hover:duration-0 max-xl:hidden">
                    <h1 className="mb-8 line-clamp-3 -rotate-90 text-ellipsis text-[32px] text-white">
                      {item?.[`title_${lang}`]}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewChoose;
