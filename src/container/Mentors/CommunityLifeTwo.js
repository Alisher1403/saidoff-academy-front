import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import grainBg from "../../../public/img/grain.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

function CommunityLifeTwo() {
  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`COMMUNITY_LIFE.${str}`, {
      returnObjects: true,
      ns: "Mentors",
      ...params,
    });
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const mapData = useMemo(() => {
    const data = t("COMMUNITY_LIST");
    let result = [];
    for (let i = 0; i < data.length; i += 2) {
      result.push([data[i], data[i + 1]]);
    }
    return result;
  }, []);

  return (
    <div className="relative bg-main-bg py-[100px]">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto w-11/12">
        <div className="communitylife_main">
          <div>
            <h4
              data-aos="fade-up"
              className="text-center text-[64px] text-white max-md:text-4xl"
            >
              {t("TITLE")}
            </h4>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-x-3 gap-y-8 max-md:grid-cols-2 max-md:gap-x-2 max-md:gap-y-4">
            {mapData.flatMap((item, index) => {
              const even = index % 2 === 0;
              return (
                <React.Fragment>
                  <div
                    key={index}
                    className={`relative h-[475px] duration-200 max-xl:h-[230px] max-sm:h-[150px] md:grayscale-[100%] md:hover:grayscale-0 ${even ? "col-span-2" : "col-span-1"}`}
                    data-aos-duration="1000"
                  >
                    <Image
                      src={item[0]}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full"
                    />
                  </div>
                  <div
                    key={index}
                    className={`relative h-[475px] duration-200 max-xl:h-[230px] max-sm:h-[150px] md:grayscale-[100%] md:hover:grayscale-0 ${even ? "col-span-1" : "col-span-2"}`}
                    data-aos-duration="1000"
                  >
                    <Image
                      src={item[1]}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full"
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityLifeTwo;
