import React, { useEffect } from "react";
import bg from "../../../public/img/aboutcourse-header-bg.png";
import grainBg from "../../../public/img/grain.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function AboutCourseHeader({ course }) {
  const { t: translate } = useTranslation();
  const router = useRouter();
  const { course_id } = router.query;

  function t(str) {
    return translate(`ABOUT_COURSE_HEADER.${str}`, {
      ns: "AboutCourse",
    });
  }

  const data = course?.course;

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative z-[1] h-[100vh] max-h-[938px] bg-main-bg">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute z-[-1] h-full w-full overflow-x-hidden">
        <Image src={bg} alt="" className="h-full w-full" />
      </div>

      {/* MAIN CONTENT */}
      <div className="container z-10 mx-auto h-full w-11/12">
        <div className="content flex h-full flex-col items-center justify-center">
          <h3
            className="w-full break-words bg-gradient-title bg-clip-text text-center text-5xl font-bold text-transparent md:text-5xl lg:text-8xl"
            data-aos="fade-zoom-in"
          >
            {data?.title}
          </h3>
          <h4
            className="mt-12 px-3 text-center text-2xl text-stone-300 md:text-xl lg:text-[40px]"
            data-aos="fade-zoom-in"
          >
            {t("SUBTITLE")}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AboutCourseHeader;
