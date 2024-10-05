import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import grainBg from "../../../public/img/grain.png";
import bg from "../../../public/img/aboutcourse-field-bg.png";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function AboutCourseField({ course }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;
  const router = useRouter();
  const { course_id } = router.query;

  function t(str, params) {
    return translate(`ABOUT_COURSE_FIELD.${str}`, {
      ns: "AboutCourse",
      returnObjects: true,
      ...params,
    });
  }

  const data = course?.who_field_for;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-main-bg bg-cover bg-center text-[#F0EFEF] lg:px-[100px]">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* BACKGROUND */}
      <Image
        src={bg}
        alt=""
        className="absolute right-0 w-[300px] object-contain"
      />

      {/* content */}
      <div className="container relative z-10 mx-auto w-11/12">
        <h4
          className="mb-32 text-left text-3xl font-bold md:pl-4 md:text-5xl lg:mb-32 xl:text-6xl"
          data-aos="fade-up"
        >
          {t("TITLE")}
        </h4>

        <div className="absolute left-[451px] top-[-10px] hidden lg:inline">
          <Image src="/Images/Star.png" alt="Mask" width={40} height={28.63} />
        </div>
        <div className="mb-10 flex justify-center">
          <Image
            src="/Images/Star lines.png"
            alt="Star Line"
            className="max-w-8xl mx-auto w-full"
            width={1440}
            height={32}
          />
        </div>
        <div
          className="mx-auto grid max-w-7xl grid-cols-2 justify-items-center gap-x-4 gap-y-6 pb-10 lg:flex lg:items-center lg:justify-between"
          data-aos="fade-up"
        >
          {data?.map((item, index) => {
            return (
              <div key={index} className="text-center md:max-w-56 lg:max-w-64">
                <h2 className="mb-5 text-base font-bold md:text-xl lg:text-2xl">
                  {item?.[`title_${lang}`]}
                </h2>
                <p className="text-ceter px-3 text-xs lg:text-sm">
                  {item?.[`description_${lang}`]}
                </p>
              </div>
            );
          })}
        </div>
        <div className="absolute right-[10px] top-[90px] lg:hidden">
          <Image src="/Images/Star.png" alt="Mask" width={20} height={28.63} />
        </div>
        <div className="absolute right-[60px] top-[50px] lg:hidden">
          <Image src="/Images/Star.png" alt="Mask" width={36} height={51.54} />
        </div>
        <div className="absolute left-[10px] top-[150px] lg:hidden">
          <Image src="/Images/Star.png" alt="Mask" width={36} height={51.54} />
        </div>
      </div>
    </div>
  );
}

export default AboutCourseField;
