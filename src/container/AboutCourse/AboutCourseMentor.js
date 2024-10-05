import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { base_url } from "../../../pages/api/base_url";

function AboutCourseMentor({ course }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;
  const router = useRouter();
  const { course_id } = router.query;

  function t(str, params) {
    return translate(`ABOUT_COURSE_MENTOR.${str}`, {
      ns: "AboutCourse",
      returnObjects: true,
      ...params,
    });
  }

  const data = course?.course_mentor;

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-black py-[100px] max-md:py-10">
      <div className="container mx-auto mt-[-5px] w-11/12 py-4 text-white md:px-4 lg:pb-28 lg:pt-10">
        <h4
          className="tracking-sm mb-8 mt-8 text-3xl md:text-5xl lg:mb-16"
          data-aos="fade-up"
        >
          {t("TITLE")}
        </h4>
        <div
          className="flex flex-col items-center gap-2 md:flex-col lg:flex-row 2xl:flex-row"
          data-aos="fade-up"
        >
          {/* Mentor Image */}

          <div className="relative mb-5 aspect-[3/4] w-full max-w-[358px] lg:mb-0">
            <Image
              src={base_url + data?.image}
              alt="Mentor"
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>

          {/* Mentor Details */}
          <div className="w-full rounded-3xl border-2 border-[#ffffff33] bg-[#ffffff1a] p-8 lg:max-w-[990px]">
            <h3 className="mb-12 text-4xl uppercase">{t("RESULT")}</h3>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <h3 className="uppercase">{data?.[`experience_${lang}`]}</h3>
              <h3 className="uppercase">
                {data?.[`projects_involved_${lang}`]}
              </h3>
              <h3 className="uppercase">{data?.[`disciple_${lang}`]}</h3>
            </div>
            {/* Logos */}
            <div className="mt-20">
              <h4 className="mb-8 text-xl uppercase">{t("WORKED_TITLE")}</h4>
              <div className="grid grid-cols-2 items-center justify-items-center gap-10 md:flex md:justify-start">
                {data?.place_of_work?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative h-14 w-full max-w-[120px] xl:max-w-[150px]"
                    >
                      <Image
                        layout="fill"
                        objectFit="contain"
                        className="h-full w-full"
                        src={base_url + item?.logo}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCourseMentor;
