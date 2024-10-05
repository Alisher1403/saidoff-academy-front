import React, { useEffect, useState } from "react";
import bg from "../../../public/img/mentors-header-bg.png";
import { Arrow } from "../../../public/icon/icon";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "../../components/Modal";
import { useTranslation } from "next-i18next";

function MentorsHeader() {
  const [openModal, setOpenModal] = useState(false);

  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`MENTORS_HEADER.${str}`, {
      ns: "Mentors",
      returnObjects: true,
      ...params,
    });
  }

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      {/* MODAL */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="relative z-[2] h-[120vh] max-h-[938px] bg-main-bg">
        {/* BACKGROUND */}
        <Image
          src={bg}
          alt=""
          className="absolute inset-0 z-[-1] h-[140%] w-full min-w-[1024px] object-fill"
        />

        {/* MAIN CONTENT */}
        <div className="container relative z-10 mx-auto h-full w-11/12">
          <div className="mentorheader_main flex h-full flex-col justify-start text-center text-white">
            {/*mentors header title start*/}
            <div className="mt-[300px] flex justify-center">
              <h4
                data-aos="fade-up"
                data-aos-duration="3000"
                className="w-full text-[32px] font-normal capitalize text-white md:w-3/4 md:text-[48px] lg:flex lg:w-3/4 lg:text-[64px] xl:text-[80px]"
              >
                {t("TITLE")}
              </h4>
            </div>
            {/*mentors header title end*/}

            {/*mentors header button start*/}
            <div className="flex items-center justify-center max-md:mt-[208px] md:mt-[100px]">
              <button
                data-aos-duration="2000"
                onClick={() => setOpenModal(true)}
                className="relative flex h-[42px] w-[140px] items-center justify-center rounded-3xl border border-solid border-white md:w-[160px] lg:w-[196px]"
              >
                <p className="text-sm md:text-base lg:text-lg">
                  {translate("START_BTN")}
                </p>
                <span className="absolute right-0 translate-x-2/4">
                  <Arrow />
                </span>
              </button>
            </div>

            {/*mentors header button end*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorsHeader;
