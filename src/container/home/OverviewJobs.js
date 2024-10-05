import React, { useEffect, useState } from "react";
import grainBg from "../../../public/img/grain.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import triangleImg from "../../../public/img/triangle.png";
import { Alisher } from "../../../public/icon/icon";
import Image from "next/image";
import Link from "next/link";

//import aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

function OverviewJobs({ courses }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  const data = courses.length > 2 ? [...courses, ...courses] : courses;

  function t(str, params) {
    return translate(`OVERVIEW_JOBS.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative bg-main-bg py-[100px]">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      <div className="container relative z-10 mx-auto w-11/12">
        {/* ===== MAIN CONTENT ===== */}
        <div className="content">
          {/* title */}
          <h4
            data-aos="zoom-in-up"
            className="mb-8 bg-gradient-title bg-clip-text text-center text-[64px] font-semibold leading-[1] tracking-[1%] text-transparent max-xl:mb-8 max-xl:text-[46px]"
          >
            {t("TITLE")}
          </h4>

          {/* subtitle */}
          <p
            data-aos="zoom-out-up"
            className="mx-auto mb-[87px] max-w-[571px] text-center text-[22px] leading-7 text-white max-xl:mb-10 max-xl:text-[18px]"
          >
            {t("SUBTITLE")}
          </p>

          {/* === SLIDER SECTION === */}
          <div className="relative">
            <Swiper
              slidesPerView={"auto"}
              initialSlide={0}
              onSlideChange={(e) => {
                setActiveSlide(e.realIndex);
              }}
              loop={true}
              modules={[Autoplay]}
              autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
              breakpoints={{
                0: { spaceBetween: 0, slidesPerView: 1.3 },
                500: { slidesPerView: "auto" },
                700: { spaceBetween: 12 },
              }}
            >
              {data?.map((item, index) => {
                const isActive = activeSlide === index;

                return (
                  <SwiperSlide
                    key={index}
                    className="max-w-[406px] max-md:max-w-[341px]"
                    style={{ height: "auto" }}
                  >
                    <Link href={`/AboutCourse/${item.id}`}>
                      <div className="h-full overflow-hidden">
                        <div
                          className={`swiper-content group relative flex h-full select-none flex-col items-center justify-between rounded-[24px] border border-white border-opacity-[6%] bg-white bg-opacity-[7%] p-11 backdrop-blur-[10px] duration-[200ms] max-md:scale-[0.9] max-md:px-6 max-md:py-7 md:hover:border-opacity-[10%] md:hover:bg-opacity-[30%] ${
                            isActive &&
                            "max-md:scale-[1] max-md:border-opacity-[10%] max-md:bg-opacity-[30%]"
                          }`}
                        >
                          <div>
                            {/* title */}
                            <h5 className="mb-10 text-center text-[33px] uppercase leading-10 tracking-[1px] text-white max-md:mb-4 max-md:text-[28px] max-md:leading-8">
                              {item?.[`title_${lang}`]}
                            </h5>

                            {/* description */}
                            <p className="mb-5 text-base leading-6 text-white max-md:line-clamp-5 max-md:text-center max-md:text-[13px] max-md:leading-5">
                              {item?.[`description_${lang}`]}
                            </p>
                          </div>

                          {/* logo */}
                          <div className="relative flex aspect-square h-[184px] items-center justify-center max-md:h-[130px]">
                            <div className="absolute h-full max-h-[180px] w-full max-w-[140px]">
                              {/* icon */}
                              <Image
                                src={item?.image}
                                height={1000}
                                width={1000}
                                className={`absolute h-full w-full object-contain grayscale duration-300 md:group-hover:grayscale-0 ${
                                  isActive && "max-md:grayscale-0"
                                }`}
                              />
                              {/* icon-blur-bg */}
                              <Image
                                src={item?.image}
                                height={1000}
                                width={1000}
                                className={`absolute z-[-1] h-full w-full scale-[1] object-contain opacity-0 blur-[25px] max-md:duration-300 md:group-hover:scale-[1.3] md:group-hover:opacity-100 ${
                                  isActive &&
                                  "max-md:scale-[1.2] max-md:opacity-100 max-md:duration-300"
                                }`}
                              />
                            </div>
                          </div>

                          {/* arrow-icon */}
                          <div
                            className={`absolute bottom-8 right-6 duration-200 max-md:duration-[400ms] md:group-hover:rotate-[-135deg] ${
                              isActive && "max-md:rotate-[-135deg]"
                            }`}
                          >
                            <Alisher.Arrow700 className="aspect-square w-[56px] fill-white stroke-black max-md:w-[45px]" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* == TRIANGLE IMAGE == */}
            <Image
              src={triangleImg}
              alt=""
              className="absolute bottom-0 left-0 z-[5] w-[165px] -translate-x-1/3 translate-y-1/3 opacity-70 contrast-150 max-md:w-[139px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewJobs;
