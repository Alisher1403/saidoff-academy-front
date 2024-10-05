import React, { useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  Alisher,
  BarIcon,
  GamburgerCloseIcon,
  LanguageIcon,
  NavbarLogo,
} from "../../public/icon/icon";
import Aos from "aos";

function Navbar() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, query, asPath } = router;

  const [isClicked, setIsCliked] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);

  const { t: translate } = useTranslation();

  function t(str, params) {
    return translate(`NAVBAR.${str}`, {
      ns: "components",
      returnObjects: true,
      ...params,
    });
  }

  function changeLang(lang) {
    setIsOpenLanguage(false);
    i18n.changeLanguage(lang).then(() => {
      router.push({ pathname, query }, asPath, { locale: lang, scroll: false });
    });
  }

  const openPhoneMenu = () => {
    setIsCliked(!isClicked);
  };

  const openLanguage = (e) => {
    e?.stopPropagation();
    setIsOpenLanguage(!isOpenLanguage);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 800 });

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 bottom-auto z-[1000] w-full">
      {/*ExtraNavbar*/}
      <div className="hidden w-full gap-96 border-b-[1px] border-Nfixen py-3 backdrop-blur-2xl md:flex">
        <div className="container mx-auto flex w-11/12 justify-between">
          <div className="flex items-center gap-7">
            <i className="w-[331px] text-xs text-[#515151]">
              {translate("CITY")}
              <br />
              {translate("LANDMARK")}
            </i>
            <div className="opasity-[40%] h-6 w-2 border-r-2 border-solid border-[rgba(255,_255,_255,_0.4)]" />
            <button className="flex items-center gap-3 rounded-lg border-[1px] border-inherit px-6 py-2 text-xs text-primary">
              <LuPhone />
              <Link className="" href="tel:+998951810330">
                {translate("PHONE_NUMBER", { ns: "common" })}
              </Link>
            </button>
          </div>
          {/* social media links */}
          <div className="grow-1 flex h-full items-center justify-center gap-5 text-lg text-primary">
            {t("SOCIAL_MEDIA_NAVBAR_LIST")?.map((item, index) => {
              const Icon = Alisher[item.icon];

              return (
                <Link
                  key={index}
                  className=""
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 fill-neutral-200" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/*ExtraNavbar*/}

      {/*Navbar*/}
      <div
        className={`left-0 right-0 z-30 w-full transition-all duration-500 ${
          isScrolled ? "fixed top-0 bg-black/50 shadow-lg backdrop-blur-md" : ""
        }`}
      >
        <div className="container mx-auto w-11/12">
          <div className="flex items-center justify-between py-6">
            <div
              onClick={openPhoneMenu}
              className="block rounded-xl border-2 border-solid border-[#FFFFFF0F] bg-[#FFFFFF29] p-[7.5px] md:hidden"
            >
              <BarIcon />
            </div>
            <div className="flex items-center justify-center">
              <Link href="/" data-aos="zoom-out-right" data-aos-duration="500">
                <NavbarLogo />
              </Link>
            </div>

            <ul className="hidden text-sm text-primary md:flex md:gap-3 lg:gap-12 2xl:gap-16">
              {t("LINKS_LIST").map((item, index) => {
                return (
                  <li
                    key={index}
                    data-aos="zoom-in-down"
                    className="group"
                    data-aos-duration="600"
                  >
                    <Link className="text-base" href={item.href}>
                      <div className="select-none transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 before:content-[''] hover:before:w-full group-hover:scale-125">
                        {item.LABEL}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* LANGUAGES MOBILE */}
            <div className="text-primary">
              <div
                tabIndex={0}
                onBlur={() => setIsOpenLanguage(false)}
                onClick={openLanguage}
                className="relative block rounded-xl border-2 border-solid border-[#FFFFFF0F] bg-[#FFFFFF29] p-[9px] md:hidden"
              >
                <LanguageIcon />
                {/* openLang */}
                <div
                  className={`absolute right-0 top-full mt-1 grid w-[80px] items-center gap-y-[1px] rounded-lg bg-gradient-to-b from-[#3F306F] to-[#8B4D7B] px-4 py-[9px] duration-[250ms] md:hidden ${isOpenLanguage ? "visible translate-y-0 scale-100 opacity-100" : "collapse -translate-y-2 scale-75 opacity-0"}`}
                >
                  <button
                    className="text-base text-[#ffffff]"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeLang("uz");
                    }}
                  >
                    Uzb
                  </button>
                  <div className="opasity-[40%] h-2 w-full border-b-2 border-solid border-[rgba(255,_255,_255,_0.4)]" />
                  <button
                    className="text-base text-[#ffffff]"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeLang("ru");
                    }}
                  >
                    Rus
                  </button>
                </div>
                {/*  */}
              </div>

              {/* LANGUAGES LG */}
              <div className="hidden md:flex md:gap-2 lg:gap-4">
                <button
                  data-aos="zoom-in-right"
                  data-aos-duration={`${router.locale == "uz" ? "1200" : "600"}`}
                  onClick={(e) => changeLang("uz")}
                >
                  <div
                    className={`transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:content-[''] ${router.locale == "uz" ? "scale-125 opacity-60 before:w-full" : "before:w-0 hover:scale-125 hover:before:w-full"}`}
                  >
                    Uzb
                  </div>
                </button>
                <div
                  className="opasity-[40%] h-6 w-2 border-r-2 border-solid border-[rgba(255,_255,_255,_0.4)]"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                />
                <button
                  data-aos="zoom-in-left"
                  data-aos-duration={`${router.locale == "ru" ? "1200" : "600"}`}
                  onClick={() => changeLang("ru")}
                >
                  <div
                    className={`transition-all before:absolute before:bottom-0 before:right-0 before:h-[1.5px] before:rotate-180 before:bg-white before:transition-all before:duration-500 before:content-[''] ${router.locale == "ru" ? "scale-125 opacity-60 before:w-full" : "before:w-0 hover:scale-125 hover:before:w-full"}`}
                  >
                    Rus
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar end*/}

      {/* MENU */}
      <div
        className={`fixed ${isClicked ? "" : "pointer-events-none scale-110 opacity-0"} left-0 top-0 z-[1001] flex h-[100dvh] w-full flex-col justify-between bg-gradient-to-b from-[rgba(64,47,117,1.0)] to-[rgba(192,94,154,1.0)] p-10 transition-all duration-300 md:hidden`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/">
              <NavbarLogo />
            </Link>
          </div>
          <div
            className="rounded-xl border-2 border-solid border-[#FFFFFF0F] bg-[#FFFFFF1A] px-[14px] py-[13px]"
            onClick={openPhoneMenu}
          >
            <GamburgerCloseIcon />
          </div>
        </div>
        <ul className="flex flex-col">
          {t("LINKS_LIST").map((item, index) => {
            return (
              <li
                key={index}
                onClick={openPhoneMenu}
                className="w-[60%] min-w-[221px] border-b border-white border-opacity-20"
              >
                <Link href={item.href} className="block w-full py-6">
                  <h4 className="text-[28px] tracking-[1px] text-white">
                    {item.LABEL}
                  </h4>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="grow-1 flex justify-center gap-5 text-lg text-primary">
          {t("SOCIAL_MEDIA_LIST")?.map((item, index) => {
            const Icon = Alisher[item.icon];

            return (
              <Link
                key={index}
                className="block rounded-full border border-neutral-400 p-4"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 fill-zinc-400" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* Gamgurger end*/}
    </div>
  );
}

export default Navbar;
