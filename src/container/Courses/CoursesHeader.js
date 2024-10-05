import React, { useState } from "react";
import bg from "../../../public/img/courses-header-bg.png";
import grainBg from "../../../public/img/grain.png";
import Image from "next/image";
import { Alisher } from "../../../public/icon/icon";
import Modal from "../../components/Modal";
import { useTranslation } from "next-i18next";

function CoursesHeader() {
  const [openModal, setOpenModal] = useState(false);
  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`Course_Header.${str}`, {
      ns: "Course",
      ...params,
    });
  }
  return (
    <div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="relative z-[1] h-[1036px] bg-main-bg max-md:h-[100vh]">
        {/* MODAL */}
        {/* GRAIN EFFECT BACKGROUND */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${grainBg.src})` }}
        />

        {/* BACKGROUND */}
        <div className="absolute z-[-1] flex h-full w-full items-center justify-center">
          <Image
            src={bg}
            alt=""
            className="h-full object-contain max-md:h-[588px] max-md:w-[588px] max-md:object-cover"
          />
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="container relative mx-auto h-full w-11/12">
          <div className="content flex h-full flex-col items-center justify-center">
            {/* TITLE */}
            <h4
              data-aos="zoom-in"
              className="mb-10 text-center text-[100px] font-bold leading-[100%] tracking-[2px] text-stone-200 max-md:text-[50px] max-md:leading-[54px]"
            >
              <>{t("headerTitle")}</>
            </h4>
            {/* LINE */}
            <div className="line mb-12 flex h-px w-full max-w-[512px] items-center justify-center bg-gradient-to-r from-transparent via-stone-500 to-transparent">
              <div className="line-cube aspect-square w-5 rotate-45 bg-neutral-500" />
            </div>
            {/* BUTTON */}
            <button
              onClick={() => setOpenModal(true)}
              className="btn flex w-full max-w-[250px] items-center justify-center rounded-[50px] border-2 border-white bg-zinc-600 bg-opacity-50 p-3"
            >
              <h2 className="text-[18px] text-white">
                {translate("START_BTN")}
              </h2>
              <Alisher.Arrow300 className="ml-4 w-5 stroke-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesHeader;
