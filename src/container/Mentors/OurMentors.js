import React from "react";
import Image from "next/image";
import grainBg from "../../../public/img/grain.png";
import { Alisher } from "../../../public/icon/icon";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";

function OurMentors({ team }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  function t(str, params) {
    return translate(`OUR_MENTORS.${str}`, {
      ns: "Mentors",
      returnObjects: true,
      ...params,
    });
  }

  console.log(team);

  return (
    <div className="relative bg-main-bg">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto w-11/12 py-[100px] pt-[200px] max-md:py-[100px]">
        <div className="ourmentors_main">
          <div className="mentors_bg" />
          {/* mentors page title start*/}
          <h4
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mx-auto mb-5 text-center text-[64px] font-normal capitalize leading-[1.2] tracking-[1px] text-white max-md:text-[40px]"
          >
            {t("TITLE")}
          </h4>
          {/* mentors page title end*/}

          {/* mentors page body start*/}
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="pb-10 text-center text-[22px] text-xl leading-[1.2] text-white max-md:text-[18px]"
          >
            {t("SUBTITLE")}
          </p>
          {/* mentors page body end*/}

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 max-md:gap-x-2 lg:grid-cols-4">
            {team?.map((mentor, index) => {
              return (
                <InView
                  as="div"
                  threshold={0.3}
                  rootMargin="-20%"
                  className="h-full"
                >
                  {({ inView, ref }) => (
                    <div
                      ref={ref}
                      key={index}
                      className="group flex h-full flex-col text-white"
                      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                      data-aos-duration="1000"
                    >
                      {/* mentors image start*/}
                      <div
                        className={`relative aspect-[3/5] w-full grayscale transition-all duration-300 md:hover:grayscale-0 ${inView && "max-md:grayscale-0"}`}
                      >
                        <Image
                          src={mentor.image}
                          alt={mentor.full_name}
                          layout="fill"
                          sizes="100%"
                          objectFit="cover"
                          className="h-full w-full"
                        />
                      </div>
                      {/* mentors image end*/}

                      <div className="flex flex-grow flex-col justify-between">
                        <div className="flex h-full flex-col justify-between">
                          {/* mentors role start */}
                          <p
                            className={`mt-6 text-[18px] uppercase text-grey transition-all max-xl:text-base max-md:text-xs md:group-hover:text-white ${inView && "max-md:text-white"}`}
                          >
                            {mentor?.[`job_${lang}`]}
                          </p>
                          {/* mentors role end */}
                          {/* mentors name start */}
                          <h4 className="mt-1 flex-grow text-[28px] leading-10 tracking-[1px] max-xl:text-[25px] max-md:text-[20px] max-md:leading-6">
                            {mentor?.[`full_name_${lang}`]}
                          </h4>
                        </div>

                        <div className="mt-3 flex items-end justify-between gap-2">
                          {mentor?.task && mentor.task !== "null" && (
                            <p className="text-xl uppercase text-grey transition-all group-hover:text-white max-md:text-xs">
                              {mentor.task}
                            </p>
                          )}
                          {/* box arrow start*/}
                          <Alisher.Arrow700
                            className={`w-8 fill-neutral-400 stroke-zinc-800 duration-300 max-md:w-5 md:group-hover:-rotate-90 md:group-hover:fill-white ${inView && "max-md:-rotate-90 max-md:fill-white"}`}
                          />
                          {/* box arrow end*/}
                        </div>
                      </div>
                    </div>
                  )}
                </InView>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMentors;
