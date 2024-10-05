import React, { useEffect, useRef, useState } from "react";
import posterImg from "../../../public/img/overview-future-video.png";
import starImg from "../../../public/img/star5.png";
import grainBg from "../../../public/img/grain.png";
import bg from "../../../public/img/overview-future-bg.png";
import Image from "next/image";
import { Alisher } from "../../../public/icon/icon";
//import aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

function OverviewFuture() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`OVERVIEW_FUTURE.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="relative z-[3] bg-main-bg py-[100px] max-md:py-10">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute w-full translate-y-[-10%] overflow-x-hidden">
        <Image
          src={bg}
          alt=""
          className="max-h-[3000px] w-full min-w-[1440px]"
        />
      </div>

      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 z-[-1] opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* ===== CONTAINER ===== */}
      <div className="container relative mx-auto w-11/12">
        {/* star-img */}
        <Image
          src={starImg}
          alt=""
          data-aos="zoom-in"
          className="absolute left-1/2 top-1/2 z-[-1] w-[148px] -translate-x-1/2 -translate-y-1/2 contrast-[180%]"
        />

        {/* ===== MAIN CONTENT ===== */}
        <div className="content flex items-center justify-between gap-10 max-md:flex-col">
          {/* ==== LEFT ==== */}
          <div className="left">
            {/* title */}
            <h4
              data-aos="fade-down"
              className="mb-5 bg-gradient-title bg-clip-text text-left text-[72px] font-semibold leading-[1] tracking-[1%] text-transparent max-xl:text-[48px] max-md:text-center"
            >
              {t("TITLE")}
            </h4>

            {/* subtitle */}
            <p className="text-left text-[22px] leading-7 text-white max-xl:text-[18px] max-md:text-center">
              {t("SUBTITLE")}
            </p>
          </div>

          {/* ==== RIGHT VIDEO ==== */}
          <div className="right relative aspect-[5/3] w-full max-w-[738px] overflow-hidden rounded-[20px] border border-white bg-black max-xl:min-w-[300px] max-md:max-w-[450px] max-md:rounded-[10px]">
            <div
              className={`absolute inset-0 z-[1] flex cursor-pointer items-center justify-center duration-300 ${!videoPlaying ? "visible opacity-100" : "collapse opacity-0"}`}
            >
              {/* video-poster */}
              <Image
                src={posterImg}
                alt=""
                className={`h-full w-full object-cover blur-[2px] grayscale`}
                onClick={() => {
                  setVideoPlaying(true);
                  videoRef.current.play();
                }}
              />

              {/* video-btn */}
              <button
                className="absolute z-[1]"
                onClick={() => {
                  setVideoPlaying(true);
                  videoRef.current.play();
                }}
              >
                <Alisher.VideoPlayButton className="aspect-square w-[66px] max-md:w-[47px]" />
              </button>
            </div>

            {/* video-player */}
            <video
              controls
              preload="none"
              className="h-full w-full object-contain"
              ref={videoRef}
            >
              <source src="/video/overview-future-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewFuture;
