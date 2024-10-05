import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/dist/client/legacy/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function AboutCourseComputer({ course }) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const { t: translate } = useTranslation();
  const router = useRouter();
  const { course_id } = router.query;

  const data = course?.computer;

  function t(str, params) {
    return translate(`ABOUT_COURSE_COMPUTER.${str}`, {
      ns: "AboutCourse",
      returnObjects: true,
      ...params,
    });
  }

  const handleCopy = () => {
    const textToCopy = [
      { title: t("RAM"), description: data?.processor },
      { title: t("CPU"), description: data?.CPU },
      { title: t("GPU"), description: data?.GPU },
      { title: t("DISPLAY"), description: data?.display },
    ]
      .map((e) => {
        return `${e.title}: ${e.description}`;
      })
      ?.join("\n");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess("✓ Copied!"); // Update button text on success
        setTimeout(() => setCopySuccess("Copy"), 2000); // Reset button text after 2 seconds
      })
      .catch(() => {
        setCopySuccess("Failed to Copy"); // Handle copy failure
      });
  };

  return (
    <div className="relative bg-main-bg">
      {/* GRAIN EFFECT BACKGROUND */}
      <div className="absolute inset-0 opacity-10" />

      {/* Samolyot-bg */}
      <div className="absolute bottom-0 left-0 z-[1] h-full w-full max-w-[400px] translate-y-1/2 max-md:max-w-[50%]">
        <div className="relative h-full w-full">
          <Image
            src="/Images/prizma.png"
            alt="Mask"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto mt-[-2px] w-11/12 bg-cover bg-center py-10 text-white md:px-6">
        <div className="mb-10 text-center lg:mb-36" data-aos="fade-up">
          <h4 className="mx-auto mb-2 max-w-[900px] text-center text-2xl font-medium lg:mt-24 lg:text-5xl">
            {t("TITLE", { returnObjects: true })[0]}
          </h4>
          <h4 className="text-6xl font-bold lg:text-8xl">
            {t("TITLE", { returnObjects: true })[1]}
          </h4>
        </div>
        <div className="absolute max-[350px]:hidden min-[360px]:bottom-[520px] min-[360px]:left-[270px] min-[500px]:bottom-[400px] min-[500px]:left-[300px] sm:bottom-[300px] sm:left-[350px] md:bottom-[600px] md:left-[590px] lg:bottom-[600px] lg:left-[800px] xl:bottom-[750px] xl:left-[960px] 2xl:bottom-[650px] 2xl:left-[1100px]">
          <Image src="/Images/Cube.png" alt="Mask" width={413} height={614} />
        </div>

        <div
          className="relative z-10 mx-auto h-auto max-w-7xl rounded-3xl border-2 border-white border-opacity-20 bg-white bg-opacity-10 p-8 backdrop-blur-[10px]"
          data-aos="fade-up"
        >
          <ul className="space-y-6 pl-2 md:pl-8">
            {/*  */}
            <li className="flex flex-row items-center gap-4 border-b border-[#6f6b6b] py-4 md:gap-8 md:py-8">
              <h4 className="text-xl md:text-4xl">{t("RAM")}:</h4>
              <h2 className="text-base font-semibold md:text-4xl">
                {data?.processor}
              </h2>
            </li>
            {/*  */}
            <li className="flex flex-row items-center gap-4 border-b border-[#6f6b6b] py-4 md:gap-8 md:py-8">
              <h4 className="text-xl md:text-4xl">{t("CPU")}:</h4>
              <h2 className="text-base font-semibold md:text-4xl">
                {data?.CPU}
              </h2>
            </li>
            {/*  */}
            <li className="flex flex-row items-center gap-4 border-b border-[#6f6b6b] py-4 md:gap-8 md:py-8">
              <h4 className="text-xl md:text-4xl">{t("GPU")}:</h4>
              <h2 className="text-base font-semibold md:text-4xl">
                {data?.GPU}
              </h2>
            </li>
            {/*  */}
            <li className="flex flex-row items-center gap-4 border-b border-[#6f6b6b] py-4 md:gap-8 md:py-8">
              <h4 className="text-xl md:text-4xl">{t("DISPLAY")}:</h4>
              <h2 className="text-base font-semibold md:text-4xl">
                {data?.display}
              </h2>
            </li>
          </ul>
          <div className="mt-10 flex justify-center md:justify-end lg:mt-8">
            <button
              className="hover:bg-gray-600 rounded-2xl border-2 bg-[#ffffff80] px-20 py-3 text-white md:px-24 md:py-6"
              onClick={handleCopy} // Add the copy function to the button
            >
              <h4 className="text-xl font-semibold text-[#707070]">
                {copySuccess}
              </h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
