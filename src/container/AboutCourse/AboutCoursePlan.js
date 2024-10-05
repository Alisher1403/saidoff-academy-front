import React from "react";
import "aos/dist/aos.css";
import grainBg from "../../../public/img/grain.png";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function AboutCoursePlan({ course }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;
  const router = useRouter();
  const { course_id } = router.query;

  function t(str) {
    return translate(`ABOUT_COURSE_PLAN.${str}`, {
      ns: "AboutCourse",
    });
  }

  const data = course?.course_plan;

  return (
    <div className="relative bg-main-bg py-[100px]">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      <div className="container mx-auto w-11/12">
        <div className="content flex items-center justify-between gap-x-6 rounded-[24px] border-2 border-white border-opacity-10 bg-white bg-opacity-10 p-10 backdrop-blur-[5px] max-xl:flex-col max-md:px-2 max-md:py-6">
          {/* === LEFT === */}
          <div className="max-xl:w-full">
            {/* Modul davomiyligi */}
            <h4 className="text-[40px] font-bold tracking-[1px] text-white max-md:ml-4 max-md:text-[32px]">
              {t("COURSE_PLAN")}
            </h4>
            <div className="flex items-center justify-center gap-x-10 max-md:flex-col">
              <h4 className="inline-block text-[180px] font-bold tracking-[1px] text-white max-md:text-[160px]">
                {data.course_duration_time}
              </h4>
              <p className="inline-block text-center text-[56px] uppercase leading-[64px] text-white max-md:text-[48px]">
                {t("MONTHS")} / {t("MODULE")}
              </p>
            </div>
          </div>

          {/* === LINE BREAK === */}
          <div className="h-[318px] w-px bg-gradient-to-r from-transparent via-white to-transparent max-xl:my-14 max-xl:h-px max-xl:w-full xl:bg-gradient-to-b" />

          {/* === RIGHT === */}
          <div className="flex w-1/2 justify-between gap-x-14 gap-y-10 max-xl:w-full max-md:gap-x-7 max-sm:gap-x-3 max-[400px]:flex-col">
            {/* NAZARIYA */}
            <div className="w-full">
              {/* title */}
              <div className="mb-6 flex flex-col items-center">
                <div className="flex items-end">
                  <h4 className="inline-block text-[96px] font-bold leading-[1] tracking-[1px] text-white max-md:text-[69px]">
                    {data?.theory_duration_time}
                  </h4>
                  <p className="ml-4 inline-block text-[56px] leading-[1.3] text-white max-md:text-[40px]">
                    {t("MONTHS")}
                  </p>
                </div>
                <h4 className="text-[40px] font-bold uppercase leading-[64px] tracking-[1px] text-white max-md:text-[26px]">
                  {t("THEORY")}
                </h4>
              </div>
              {/* description */}
              <p className="text-center text-[14px] font-bold leading-6 tracking-[1px] text-white max-md:line-clamp-5">
                {data?.[`theory_text_${lang}`]}
              </p>
            </div>

            {/* AMALIYOT */}
            <div className="w-full">
              {/* title */}
              <div className="mb-6 flex flex-col items-center">
                <div>
                  <h4 className="inline-block text-[96px] font-bold leading-[1] tracking-[1px] text-white max-md:text-[69px]">
                    {data?.practical_duration_time}
                  </h4>
                  <p className="ml-4 inline-block text-[56px] leading-[1.3] text-white max-md:text-[40px]">
                    {t("MONTHS")}
                  </p>
                </div>
                <h4 className="text-[40px] font-bold uppercase leading-[64px] tracking-[1px] text-white max-md:text-[26px]">
                  {t("PRACTICE")}
                </h4>
              </div>
              {/* description */}
              <p className="text-center text-[14px] font-bold leading-6 tracking-[1px] text-white max-md:line-clamp-5">
                {data?.[`practical_text_${lang}`]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCoursePlan;
