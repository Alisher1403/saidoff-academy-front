import React, { useEffect, useState } from "react";
import grainBg from "../../../public/img/grain.png";
import bg from "../../../public/img/overview-header-bg.png";
import blurBg from "../../../public/img/overview-header-bg-blur.png";
import Image from "next/image";
import { Alisher } from "../../../public/icon/icon";
import { Typewriter } from "react-simple-typewriter";

//import aos
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "@/components/Modal";
import { useTranslation } from "next-i18next";

function OverviewHeader(props) {
  const [openModal, setOpenModal] = useState(false);

  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`OVERVIEW_HEADER.${str}`, {
      ns: "Home",
      ...params,
    });
  }

  return (
    <div>
      {/* MODAL */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} {...props} />

      <div className="relative z-[1] h-[100vh] max-h-[938px] bg-main-bg">
        {/* GRAIN EFFECT BACKGROUND */}
        <div
          className="absolute inset-0 z-[-1] opacity-10"
          style={{ backgroundImage: `url(${grainBg.src})` }}
        />

        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 bottom-auto flex h-full w-full items-center justify-center">
          <Image
            src={blurBg}
            alt=""
            className="absolute inset-0 bottom-auto h-full w-full object-fill"
          />

          <Image
            src={bg}
            alt=""
            className="absolute h-full max-h-[628px] object-contain mix-blend-color-dodge max-md:max-h-[559px] max-md:object-cover"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="container relative mx-auto flex h-full w-11/12 items-center justify-center">
          <div className="content flex h-full flex-col items-center justify-between gap-16 text-base max-md:text-[10px]">
            {/* empty-div */}
            <div />

            {/* text-content */}
            <div className="flex flex-col items-center justify-center">
              {/* TITLE */}
              <h4 className="mb-5 w-full max-w-[700px] bg-gradient-title bg-clip-text pt-3 text-center text-6xl font-semibold leading-[56px] text-transparent xl:text-8xl">
                {t("TITLE")
                  ?.split("\n")
                  .map((e, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <Typewriter words={[e]} typeSpeed={100} />
                        <br />
                      </React.Fragment>
                    );
                  })}
              </h4>

              {/* LINE */}
              <div className="line mb-5 flex h-px w-full max-w-[512px] items-center justify-center bg-gradient-to-r from-transparent via-stone-500 to-transparent">
                <div className="line-cube aspect-square w-3 rotate-45 bg-neutral-500" />
              </div>

              {/* SUBTITLE */}
              <h2
                className={`bg-gradient-to-bl from-stone-400 to-stone-100 bg-clip-text text-center text-3xl uppercase leading-[1] tracking-[2px] text-transparent max-md:leading-10 xl:text-[52px]`}
              >
                {t("SUBTITLE")}
              </h2>
            </div>

            {/* BUTTON */}
            <button
              className={`group max-w-[250px] translate-y-[-100px]`}
              onClick={() => setOpenModal(true)}
            >
              <div className="relative flex items-center justify-center rounded-full border border-white p-3 px-10 transition-all hover:scale-105 hover:bg-white/50 hover:backdrop-blur-md">
                <h3 className="text-[21px] text-white transition-all group-hover:text-black">
                  {translate("START_BTN")}
                </h3>

                <div className="absolute right-0 ml-4 w-[65px] translate-x-1/2 stroke-white">
                  <div className="transition-all group-hover:translate-x-3">
                    <Alisher.Arrow500 />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewHeader;
