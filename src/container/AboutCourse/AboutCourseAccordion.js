import React, { useEffect, useMemo, useRef, useState } from "react";
import "aos/dist/aos.css";
import grainBg from "../../../public/img/grain.png";
import { Alisher } from "../../../public/icon/icon";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function AboutCourseAccordion({ course }) {
  const [activeIndex, setActiveIndex] = useState([]);
  const router = useRouter();
  const { course_id } = router.query;
  const { t: translate, i18n } = useTranslation();
  const contentRefs = useRef([]);
  const data = course?.course_module;

  const lang = i18n.language;

  function t(str, params) {
    return translate(`ABOUT_COURSE_ACCORDION.${str}`, {
      ns: "AboutCourse",
      returnObjects: true,
      ...params,
    });
  }

  useEffect(() => {
    setActiveIndex([true]);
  }, [router]);

  const toggleAccordion = (index) => {
    let newArr = [...activeIndex];
    newArr[index] = !newArr[index];
    setActiveIndex(newArr);
  };

  return (
    <div className="relative bg-main-bg">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto w-11/12 bg-cover bg-center py-[100px] max-md:py-10">
        <div className="mx-auto flex w-full flex-col gap-y-3 sm:py-4">
          {data?.map((module, index) => {
            const isActive = activeIndex[index];

            return (
              <div key={index} className="py-[10px]">
                {/* title */}
                <div
                  className={`relative z-10 flex cursor-pointer items-center justify-between rounded-2xl bg-white p-6 pl-[54px] backdrop-blur-[20px] max-md:p-4 ${
                    isActive
                      ? "border-2 border-[#ffffff66] bg-opacity-40 text-white"
                      : "border-2 border-[#ffffff33] bg-opacity-20 text-white"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex flex-row items-center gap-2">
                    <h2 className="text-base lg:text-2xl">
                      {module?.[`text_${lang}`]}
                    </h2>
                  </div>

                  <span
                    className={`transform transition-transform duration-200 ${isActive ? "-rotate-90" : "rotate-0"}`}
                  >
                    <Alisher.Arrow700
                      className={`w-8 fill-white max-md:w-4 ${isActive ? "opacity-100" : "opacity-50"}`}
                    />
                  </span>
                </div>
                {/* list */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="accordion-body -mt-5 overflow-hidden duration-300"
                  style={{
                    maxHeight: isActive
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <div className="border-2 border-[#ffffff1a] bg-[#6f6b6b66] py-5 pl-[54px] pr-[92px] backdrop-blur-[10px] max-md:pl-7 max-md:pr-11">
                    {module.lesson.length > 0 ? (
                      module.lesson.map((item, i) => (
                        <div
                          key={i}
                          className="border-b border-white border-opacity-20 py-6 text-white max-md:py-5"
                        >
                          <h2 className="w-full break-words text-sm lg:text-lg">
                            {i + 1} - {t("LESSON")}: {item?.[`text_${lang}`]}
                          </h2>
                        </div>
                      ))
                    ) : (
                      <div className="pt-5 text-white">
                        {" "}
                        <h2 className="text-sm lg:text-lg">
                          No content available
                        </h2>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutCourseAccordion;
