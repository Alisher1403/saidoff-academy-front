import React, { useEffect, useRef, useState, useCallback } from "react";
import bg from "../../public/img/overview-form-bg.png";
import grainBg from "../../public/img/grain.png";
import Image from "next/image";
import img from "../../public/img/overview-form-img.png";
import { Alisher } from "../../public/icon/icon";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Form({ courses }) {
  const { t: translate, i18n } = useTranslation();

  const lang = i18n.language;

  function t(str, params) {
    return translate(`FORM.${str}`, {
      ns: "components",
      returnObjects: true,
      ...params,
    });
  }

  const router = useRouter();
  const componentRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: null,
  });
  const [selectOpen, setSelectOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (router.asPath.includes("#Contact")) {
      window.scrollTo({
        top: componentRef.current.offsetTop + 40,
        behavior: "smooth",
      });
    }
  }, [router.asPath]);

  const handleClickOutside = useCallback((e) => {
    if (componentRef.current && !componentRef.current.contains(e.target)) {
      setSelectOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  function submit(e) {
    e.preventDefault();

    // Basic validation
    if (!/^\d{9}$/.test(form.phone)) {
      alert("Telefon raqamni to'g'ri kiriting.");
      return;
    }

    fetch(`/api/common/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setForm({ name: "", phone: "", course: "" });
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          alert("Xato yuz berdi, qaytadan urinib ko'ring.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Xato yuz berdi, qaytadan urinib ko'ring.");
      });
  }

  return (
    <div
      className="relative bg-main-bg py-[200px] max-md:pb-[150px] max-md:pt-10"
      ref={componentRef}
    >
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute top-0 w-full -translate-y-1/4 overflow-x-hidden blur-[5px]">
        <Image
          src={bg}
          alt="Background"
          className="max-h-[3000px] w-full min-w-[1440px]"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto w-11/12">
        <div className="content">
          <h4
            className="mb-[88px] max-w-[889px] bg-gradient-title bg-clip-text text-[64px] font-semibold tracking-[1px] text-transparent max-xl:mb-8 max-xl:text-[32px]"
            data-aos="zoom-in"
          >
            {t("TITLE")}
          </h4>

          {/* content-figure-img */}
          <Image
            src={img}
            alt="Form Image"
            className="absolute inset-0 left-auto z-[-1] h-full w-auto object-contain contrast-[150%]"
            data-aos="zoom-out"
          />

          {/* form */}
          <form className="max-w-[614px]" onSubmit={submit}>
            {/* NAME INPUT */}
            <div className="input-wrapper wfwf mb-5">
              <h3 className="leading-4.5 m-1.5 text-[24px] text-neutral-400 max-md:text-base">
                {t("USERNAME.label")}
              </h3>
              <div className="rounded-[24px] border-2 border-white border-opacity-10 bg-white bg-opacity-10 px-5 backdrop-blur-[8px] focus-within:border-opacity-40 max-md:rounded-[16px] max-md:px-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("USERNAME.placeholder")}
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="leading-4.5 w-full bg-transparent py-6 text-[20px] text-white outline-0 placeholder:text-neutral-400 max-md:py-4 max-md:text-[14px]"
                />
              </div>
            </div>

            {/* PHONE INPUT */}
            <div className="input-wrapper mb-5">
              <h3 className="leading-4.5 m-1.5 text-[24px] text-neutral-400 max-md:text-base">
                {t("PHONE.label")}
              </h3>
              <div className="flex items-center gap-x-2 rounded-[24px] border-2 border-white border-opacity-10 bg-white bg-opacity-10 px-5 backdrop-blur-[8px] focus-within:border-opacity-40 max-md:rounded-[16px] max-md:px-4">
                <p className="leading-4.5 text-[20px] text-white max-md:text-[14px]">
                  +998
                </p>
                <input
                  type="text"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="leading-4.5 w-full bg-transparent py-6 text-[20px] text-white outline-0 placeholder:text-neutral-400 max-md:py-4 max-md:text-[14px]"
                />
              </div>
            </div>

            {/* COURSE INPUT */}
            <div className="input-wrapper mb-5">
              {/* course-header */}
              <h3 className="leading-4.5 m-1.5 text-[24px] text-neutral-400 max-md:text-base">
                {t("COURSE.label")}
              </h3>
              <div className="relative z-[1]">
                <div className="flex items-center gap-x-2 rounded-[24px] border-2 border-white border-opacity-10 bg-white bg-opacity-10 backdrop-blur-[20px] focus-within:border-opacity-40 max-md:rounded-[16px]">
                  <button
                    className="flex w-full items-center justify-between py-6 pl-5 pr-7 max-md:px-4 max-md:py-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectOpen(!selectOpen);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setSelectOpen(false);
                      }, 100);
                    }}
                  >
                    <p
                      className={`leading-4.5 bg-transparent text-[20px] outline-0 max-md:text-[14px] ${
                        form.course ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      {form.course || t("COURSE.placeholder")}
                    </p>
                    <Alisher.Chevron300 className="w-[18px] fill-zinc-400" />
                  </button>
                </div>

                {/* course-dropdown */}
                <div
                  className={`absolute inset-0 bottom-auto top-0 z-[-1] mt-2 overflow-hidden rounded-[24px] border-2 border-white border-opacity-10 bg-white bg-opacity-15 backdrop-blur-[20px] duration-[250ms] max-md:rounded-[16px] ${
                    selectOpen
                      ? "visible top-full opacity-100"
                      : "collapse opacity-0"
                  }`}
                >
                  {courses?.map((item, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        setForm({ ...form, course: item?.id });
                        setSelectOpen(false);
                      }}
                      className="w-full border-b border-white border-opacity-10 bg-white bg-opacity-0 px-5 py-4 text-start last:border-0 hover:bg-opacity-10 max-md:px-4 max-md:py-3"
                    >
                      <p className="leading-4.5 text-[22px] text-white opacity-70 max-md:text-[14px]">
                        {item?.[`title_${lang}`]}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* success-message */}
            {submitted && (
              <p className="mt-5 text-green-400">{t("SUCCESS_MESSAGE")}</p>
            )}

            {/* submit-button */}
            <button
              className={`mt-14 block w-full max-w-[404px] rounded-[32px] border-2 border-white border-opacity-50 ${
                submitted ? "bg-green-600" : "bg-rose-600"
              } py-6 max-md:mx-auto max-md:max-w-[249px] max-md:rounded-[19px] max-md:py-5`}
              disabled={submitted}
            >
              <h3 className="text-[28px] text-white max-md:text-base">
                {submitted ? t("SUBMITTED_BTN") : t("SUBMIT_BTN")}
              </h3>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
