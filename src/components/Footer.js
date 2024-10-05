import React from "react";
import { Alisher, SON } from "../../public/icon/icon";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function Footer() {
  const { t: translate } = useTranslation();

  function t(str) {
    return translate(`FOOTER.${str}`, {
      ns: "components",
    });
  }

  return (
    <div className="relative z-10 bg-main-bg pb-[64px] pt-[150px] max-md:pt-10">
      <div className="container mx-auto w-11/12">
        <div className="">
          <div className="grid auto-rows-auto grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {/* left */}
            <div className="w-full max-xl:col-span-2 max-xl:mb-14 max-sm:col-span-1">
              <Link href="/">
                <Alisher.Logo className="w-[261px] max-md:w-[163px]" />
              </Link>
            </div>

            {/* right */}

            {/* links */}
            <div className="max-md:mb-14">
              <h4 className="mb-8 text-[32px] text-white max-md:mb-3 max-md:text-[20px]">
                {t("OUR_COURSES")}
              </h4>

              <ul className="flex flex-col gap-y-4">
                {translate("COURSES_LIST", { returnObjects: true })?.map(
                  (item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={`/AboutCourse/${item.href}`}
                          className="text-stone-300 hover:text-white"
                        >
                          <p className="text-nowrap text-[20px] leading-6 max-md:text-base max-md:leading-4">
                            {item.label}
                          </p>
                        </Link>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            {/* location */}
            <div className="">
              <h4 className="mb-8 text-[32px] text-white max-md:mb-3 max-md:text-[20px]">
                {t("CONTACT_US")}
              </h4>

              <p className="text-base leading-5 text-white max-md:text-[14px] max-md:leading-6">
                {translate("CITY")}
                <br />
                {translate("LANDMARK")}
              </p>

              <Link
                href="tel:+998951850330"
                className="mt-10 block text-2xl text-white transition-transform duration-500 hover:scale-110 max-md:text-[18px] lg:top-14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>{translate("PHONE_NUMBER_FORMATTED")}</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-around px-4 lg:mt-20 lg:px-28">
          <div className="h-[2px] w-full bg-[#454342] lg:h-[1px]" />
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div className="mt-10 flex items-center justify-center gap-x-5 max-md:gap-x-3">
          {translate("NAVBAR.SOCIAL_MEDIA_LIST", {
            ns: "components",
            returnObjects: true,
          })?.map((item, index) => {
            const Icon = Alisher[item.icon];

            return (
              <Link
                href={item.href}
                target="_blank"
                key={index}
                className="group rounded-full border border-white border-opacity-30 p-6 duration-200 hover:border-opacity-70 max-md:p-3"
              >
                <div>
                  <Icon className="h-8 fill-neutral-400 duration-200 group-hover:scale-[1.1] group-hover:fill-white max-md:h-4" />
                </div>
              </Link>
            );
          })}
        </div>
        {/*  */}
        <div className="mt-4 flex justify-center text-[#757575] lg:mt-14">
          <SON.CopyrightFooter />{" "}
          <h3 className="mt-[2px] text-sm">2024.Copyright by Saidoff.group</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
