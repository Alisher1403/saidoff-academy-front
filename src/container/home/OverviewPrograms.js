import React, { useState } from "react";
import grainBg from "../../../public/img/grain.png";
import smileBg from "../../../public/img/smile.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Alisher } from "../../../public/icon/icon";
import Image from "next/image";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";
import { base_url } from "../../../pages/api/base_url";

function OverviewPrograms({ ourProgram }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  const data = ourProgram?.programs?.[0];

  function t(str, params) {
    return translate(`OVERVIEW_PROGRAMS.${str}`, {
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
        {/* cube-bg-image */}
        <Image
          src={smileBg}
          alt=""
          className="absolute top-0 z-[-1] w-[129px] rotate-[-30deg] opacity-50 max-md:left-0 max-md:opacity-100 lg:right-44"
          data-aos="fade-left"
        />

        {/* ===== MAIN CONTENT ===== */}
        <div className="content">
          {/* title */}
          <h4
            className="mb-8 bg-gradient-title bg-clip-text text-center text-[64px] font-semibold leading-[1] tracking-[1%] text-transparent max-xl:mb-8 max-xl:text-[40px] max-xl:leading-10"
            data-aos="zoom-in"
          >
            {t("TITLE")}
          </h4>

          {/* subtitle */}
          <p
            className="mx-auto mb-[87px] max-w-[631px] text-center text-[22px] leading-7 text-white max-xl:mb-10 max-xl:text-base"
            data-aos="zoom-out"
          >
            {t("SUBTITLE")}
          </p>

          {/* Programs */}
          <div className="flex items-center">
            <Swiper
              slidesPerView={"auto"}
              initialSlide={0}
              modules={[Autoplay]}
              breakpoints={{
                0: { spaceBetween: 12, slidesPerView: 1.5 },
                400: { spaceBetween: 12, slidesPerView: 2 },
                500: { spaceBetween: 12, slidesPerView: 2.2 },
                700: {
                  spaceBetween: 12,
                  slidesPerView: "auto",
                },
              }}
            >
              {data?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="max-w-[406px] max-md:max-w-[250px]"
                    style={{ height: "auto" }}
                  >
                    <Link href={`/OurPrograms/${item?.id}`}>
                      <div className="h-full overflow-hidden">
                        <div
                          className={`swiper-content group relative flex h-full select-none flex-col items-center rounded-[24px] border-2 border-white border-opacity-[20%] bg-white bg-opacity-[7%] px-6 py-11 backdrop-blur-[10px] duration-[200ms] max-md:scale-[1] max-md:px-3 max-md:pb-5 max-md:pt-3 md:hover:border-opacity-[10%] md:hover:bg-opacity-[30%]`}
                        >
                          {/* == LOGO == */}
                          <div className="relative mb-6 min-h-[216px] w-full max-md:mb-4 max-md:min-h-[100px]">
                            <div className="flex h-full w-full justify-center">
                              {/* icon */}
                              <Image
                                src={base_url + item?.image}
                                layout="fill"
                                alt=""
                                className={`absolute h-full w-full object-contain duration-300 md:group-hover:opacity-100`}
                              />
                              {/* icon-blur-bg */}
                              <div className="absolute z-[-1] h-[180%] w-2/5 scale-[1.3] blur-[35px] saturate-[250%] max-md:duration-300 md:opacity-0 md:group-hover:opacity-100">
                                <Image
                                  src={base_url + item?.image}
                                  layout="fill"
                                  alt=""
                                  objectFit="fill"
                                  className="h-full w-full"
                                />
                              </div>
                            </div>
                          </div>

                          {/* == TEXT CONTENT == */}
                          <div className="flex h-full flex-col justify-between">
                            <div>
                              {/* title */}
                              <h4 className="mb-6 text-center text-[40px] leading-[56px] tracking-[1px] text-white max-md:mb-1.5 max-md:text-[22px] max-md:leading-7">
                                {item?.[`title_${lang}`]}
                              </h4>

                              {/* description */}
                              <p className="mb-10 text-center text-base leading-6 text-white max-md:mb-3 max-md:line-clamp-5 max-md:text-[10px] max-md:leading-4">
                                {item?.[`description_${lang}`]}
                              </p>
                            </div>

                            {/* batafsil-btn */}
                            <button className="mx-auto flex items-center justify-center border-b border-white py-1">
                              <p className="text-[26px] uppercase text-white max-md:text-[11px]">
                                {t("IN_DETAIL")}
                              </p>
                              <Alisher.Arrow300 className="ml-2 w-7 stroke-white max-md:ml-1 max-md:w-[16px]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPrograms;
