import React from "react";
import grainBg from "../../../public/img/grain.png";
import triangleImg from "../../../public/img/triangle.png";
import { Alisher } from "../../../public/icon/icon";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";

function CoursesJobs() {
  const { t: translate } = useTranslation();
  function t(str, params) {
    return translate(`COURSES_JOBS.${str}`, {
      ns: "Course",
      returnObjects: true,
      ...params,
    });
  }

  return (
    <div className="relative bg-main-bg py-[100px]">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      <div className="container relative z-[1] mx-auto w-11/12">
        {/* ===== MAIN CONTENT ===== */}
        <div className="content">
          {/* title */}
          <h2
            data-aos="fade-down"
            className="mb-8 bg-gradient-title bg-clip-text text-center text-[64px] tracking-[1%] text-transparent max-xl:mb-8 max-xl:text-[40px] max-md:leading-[1]"
          >
            {t("TITLE")}
          </h2>

          {/* subtitle */}
          <p
            data-aos="fade-down"
            className="mx-auto mb-[87px] max-w-[571px] text-center text-[22px] leading-7 text-white max-xl:mb-10 max-xl:text-base"
          >
            {t("SUBTITLE")}
          </p>

          {/* === SLIDER SECTION === */}
          <div className="relative">
            {/* == JOBS LIST == */}
            <div className="grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-xl:gap-y-5 max-md:gap-x-2">
              {t("JOBS_LIST")?.map((item, index) => {
                const DarkIcon = Alisher[item.darkIcon];
                const Icon = Alisher[item.icon];

                return (
                  <InView as="div" threshold={0.5} rootMargin="-20%">
                    {({ inView, ref }) => (
                      <Link
                        ref={ref}
                        href={`/AboutCourse/${item.href}`}
                        key={index}
                      >
                        <div className="h-full overflow-hidden">
                          <div
                            className="swiper-content group relative flex h-full w-full select-none flex-col items-center justify-between rounded-[24px] border border-white border-opacity-[6%] bg-white bg-opacity-[7%] p-11 backdrop-blur-[10px] duration-[200ms] max-md:rounded-[11px] max-md:px-3 max-sm:py-5 md:hover:border-opacity-[10%] md:hover:bg-opacity-[30%]"
                            data-aos={item.aos}
                          >
                            <div>
                              {/* title */}
                              <h5 className="mb-10 text-center text-[33px] uppercase leading-10 tracking-[1px] text-white max-md:mb-1 max-md:text-[15px] max-md:leading-5">
                                {item.title}
                              </h5>
                              {/* description */}
                              <p className="mb-[72px] text-center text-[18px] leading-7 text-white max-md:mb-5 max-md:line-clamp-6 max-sm:text-[10px] max-sm:leading-3">
                                {item.description}
                              </p>
                            </div>

                            {/* logo */}
                            <div className="flex h-full w-full items-center justify-center">
                              <div className="relative aspect-square w-[50%] max-sm:w-[55%]">
                                {/* icon-dark */}
                                <DarkIcon
                                  className={`absolute h-full w-full opacity-100 duration-300 md:group-hover:opacity-0 ${inView && "max-md:opacity-0"}`}
                                />
                                {/* icon */}
                                <Icon
                                  className={`absolute h-full w-full opacity-0 duration-300 md:group-hover:opacity-100 ${inView && "max-md:opacity-100"}`}
                                />
                                {/* icon-blur-bg */}
                                <Icon
                                  className={`absolute z-[-1] h-full w-full scale-[1] opacity-0 blur-[25px] grayscale-[60%] duration-300 md:group-hover:scale-[1.3] md:group-hover:opacity-100 ${inView && "max-md:scale-[1.3] max-md:opacity-100"}`}
                                />
                              </div>
                            </div>

                            <div
                              className={`absolute bottom-8 right-6 duration-200 max-md:bottom-4 max-md:right-3 max-md:duration-[400ms] md:group-hover:rotate-[-135deg] ${inView && "max-md:rotate-[-135deg]"}`}
                            >
                              <Alisher.Arrow700 className="aspect-square w-[56px] fill-white stroke-black max-md:w-[26px]" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </InView>
                );
              })}
            </div>

            {/* == TRIANGLE IMAGE == */}
            <Image
              src={triangleImg}
              alt=""
              className="absolute bottom-0 left-0 z-[-1] w-[203px] -translate-x-1/2 translate-y-1/2 opacity-70 contrast-[180%] saturate-[200%]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesJobs;
