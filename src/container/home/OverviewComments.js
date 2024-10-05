import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import abstract from "../../../public/img/overview-comments-shape.png";
import grainBg from "../../../public/img/grain.png";
import "swiper/css";
import "swiper/css/autoplay";
import { Alisher } from "../../../public/icon/icon";
import { useTranslation } from "next-i18next";

function OverviewComments({ studentFeedback }) {
  let swiperRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  function t(str, params) {
    return translate(`OVERVIEW_COMMENTS.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  console.log(studentFeedback);

  return (
    <div className="relative bg-main-bg py-[100px] max-md:py-10">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* MAIN CONTENT */}
      <div className="Comment container relative mx-auto w-11/12">
        <div className="content z-10">
          <Image
            src={abstract}
            className="absolute top-0 z-10 w-[75px] mix-blend-hard-light contrast-[150%] md:right-[4%] md:w-[90px] lg:right-[7%] lg:w-[118px] xl:right-[14%]"
            alt="Abstract decoration"
            data-aos="fade-up"
          />
          <h4
            className="text-gradient relative z-20 mb-10 text-center text-[30px] font-semibold text-[#ffffff] sm:text-[40px] md:text-[50px] lg:text-[64px]"
            data-aos="zoom-in"
          >
            {t("TITLE")}
          </h4>
          <Swiper
            modules={[Autoplay]}
            initialSlide={0}
            spaceBetween={10}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
            }}
            speed={300}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            onInit={(swiper) => (swiperRef.current = swiper)}
          >
            {studentFeedback?.map((item, index) => {
              const isActive = activeSlide === index;

              return (
                <SwiperSlide
                  key={index}
                  className="max-w-[614px] max-md:max-w-[341px]"
                  style={{ height: "auto" }}
                >
                  <div
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white border-opacity-15 bg-white bg-opacity-10 px-9 py-5 backdrop-blur-[10px] duration-300 md:rounded-3xl md:px-5 md:py-10 md:hover:grayscale-0 lg:px-14`}
                  >
                    {/* bg-gradient opacity uchun */}
                    <div
                      className={`absolute inset-0 flex h-full w-full bg-gradient-comments duration-300 group-hover:opacity-100 md:opacity-0 ${isActive ? "max-md:opacity-100" : "max-md:opacity-0"}`}
                    />

                    {/* comment-textcontent */}
                    <div>
                      {/* quote-mark */}
                      <Alisher.QuoteMark className="w-[24px] fill-white opacity-50 max-md:w-[14px]" />

                      {/* comment-text */}
                      <p className="my-2 mb-4 line-clamp-6 text-xs text-[#ffffff] md:my-6 md:text-sm lg:text-base">
                        {item?.[`text_${lang}`]}
                      </p>
                    </div>

                    {/* comment-user */}
                    <div className="flex items-center">
                      {/* user-img */}
                      <div
                        className={`relative flex aspect-square min-w-[72px] items-end overflow-hidden rounded-full bg-gradient-to-br from-rose-400 to-indigo-500 grayscale duration-200 max-md:h-[44px] max-md:min-w-10 md:group-hover:grayscale-0 ${isActive ? "max-md:grayscale-0" : "max-md:grayscale"}`}
                      >
                        <Image
                          className="h-full w-full"
                          src={item?.image}
                          alt={item?.[`full_name_${lang}`]}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      {/* user-info */}
                      <div className="ml-8 max-md:ml-4">
                        <h4 className="text-[12px] tracking-[1px] text-[#ffffff] md:mb-1 md:text-base lg:text-xl xl:text-2xl">
                          {item?.[`full_name_${lang}`]}
                        </h4>
                        <p className="text-[10px] uppercase text-[#D2D2D2] md:text-xs lg:text-base">
                          {item?.[`course_name_${lang}`]}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OverviewComments;
