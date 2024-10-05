import React from "react";
import grainBg from "../../../public/img/grain.png";
import { useTranslation } from "next-i18next";

function OurProgramsTeam({ ourProgram }) {
  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  const data = ourProgram?.program;

  function t(str, params) {
    return translate(`OUR_PROGRAMS_TEAM.${str}`, {
      ns: "OurPrograms",
      returnObjects: true,
      ...params,
    });
  }

  console.log(data);

  return (
    <div className="relative z-[1] bg-main-bg py-[100px] max-md:py-10">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 z-[-1] opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      <div className="container relative z-10 mx-auto w-11/12">
        <h4 className="pb-10 text-center text-[72px] leading-[1.2] text-white max-md:text-[40px] max-sm:text-[8vw]">
          {data?.[`title_${lang}`]}
        </h4>

        <div className="grid grid-cols-3 gap-y-6 max-md:grid-cols-1">
          {/* First box */}
          {data?.program_info?.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative mx-auto mb-8 h-full w-full border border-white/10 bg-white bg-opacity-10 px-6 py-[150px] backdrop-blur-lg max-md:py-10"
              >
                <div className="absolute inset-0 z-[-1] h-full w-full bg-gradient-to-b from-bpurple to-bpink opacity-0 duration-300 group-hover:opacity-100" />
                <h4 className="text-center text-[120px] text-white md:text-num_120">
                  {item?.order}
                </h4>
                <div className="mx-auto h-px max-w-[225px] bg-white"></div>
                <div className="bg-gray-200 mx-auto mt-[130px] text-center text-white max-md:mt-[50px]">
                  <h4 className="text-2xl leading-8 tracking-[0.5px] max-md:text-lg">
                    {item?.text}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurProgramsTeam;
