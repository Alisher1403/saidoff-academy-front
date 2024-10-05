import React from "react";
import Image from "next/image";
import grainBg from "../../../public/img/grain.png";
import abstract5 from "../../../public/Image/abstract41g.png";
import "swiper/css";
import { BatafsilArrowTop, Alisher } from "../../../public/icon/icon";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";

function OverviewMentor({ team }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  function t(str, params) {
    return translate(`OVERVIEW_MENTOR.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  return (
    <div className="relative bg-main-bg py-[100px] max-md:py-10 max-md:pt-20">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto w-11/12">
        <Image
          className="absolute left-[42%] top-[160px] z-[-1] w-[72px] md:left-[46%] md:top-[140px] md:w-[115px]"
          src={abstract5}
          data-aos="fade-down"
        />
        <h4
          className="text-gradient relative mb-8 text-center text-6xl text-[38px] text-[#ffffff] sm:text-[44px] md:text-[54px] lg:text-[64px]"
          data-aos="zoom-in"
        >
          {t("TITLE")}
        </h4>
        <div className="flex justify-center">
          <p className="mb-24 w-[90%] text-center text-[18px] text-[#ffffff] sm:text-[20px] md:w-[80%] md:text-[22px] lg:w-[40%]">
            {t("SUBTITLE")}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-between gap-x-4 gap-y-10 max-md:gap-x-2 md:grid-cols-4 md:grid-rows-1">
          {team?.slice(0, 4)?.map((slide, index) => (
            <InView as="div" key={index} threshold={0.3} rootMargin="-20%">
              {({ inView, ref }) => {
                return (
                  <div
                    ref={ref}
                    className={`Cards group flex flex-col text-[#ffffff] duration-300 md:grayscale md:hover:grayscale-0 ${inView ? "max-md:grayscale-0" : "max-md:grayscale"}`}
                  >
                    {/* slide image */}
                    <div className="bgImg relative h-[300px] sm:h-[400px] md:h-[300px] lg:h-[400px] xl:h-[550px]">
                      <Image
                        src={slide?.image}
                        alt={slide?.full_name}
                        className="h-full w-full"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    {/* slide textcontent */}
                    <div className="flex flex-grow flex-col justify-between">
                      <h3 className="pt-8 text-[10px] uppercase text-[#A4A4A4] md:text-sm lg:text-base xl:text-[20px]">
                        {slide?.[`job_${lang}`]}
                      </h3>
                      <p className="text-[18px] md:text-[24px] lg:text-[28px]">
                        {slide?.[`full_name_${lang}`]}
                      </p>
                      <div className="experience mt-3 flex items-center justify-between pr-2">
                        <p className="text-xl uppercase text-grey transition-all group-hover:text-white max-md:text-xs">
                          {slide?.task && slide?.task !== "null"
                            ? slide.task
                            : ""}
                        </p>
                        <Alisher.Arrow700
                          className={`w-8 fill-neutral-400 stroke-zinc-800 duration-300 max-md:w-5 md:group-hover:-rotate-90 md:group-hover:fill-white ${inView && "max-md:-rotate-90 max-md:fill-white"}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              }}
            </InView>
          ))}
        </div>

        <div className="mt-40 flex justify-center md:mt-20">
          <Link
            href={"/Mentors"}
            className="relative mx-auto inline-block rounded-[38px] border-[0.5px] border-solid border-[#ffffff] py-1 pl-4 pr-10 text-center text-[16px] text-[#ffffff] md:py-2 md:pl-10 md:pr-16 md:text-[21px]"
          >
            {t("ALL_MENTORS_BTN")}
            <div className="text-300 absolute right-[-40px] top-[10px] md:top-[20px]">
              <BatafsilArrowTop />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OverviewMentor;
