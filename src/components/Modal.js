import React, { useEffect, useRef, useState } from "react";
import { Alisher } from "../../public/icon/icon";
import Image from "next/image";
import bg from "../../public/img/components-modal-img.png";
import { useTranslation } from "next-i18next";

const Modal = ({ open, onClose, courses }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: null,
  });

  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  function t(str, params) {
    return translate(`MODAL.${str}`, {
      ns: "components",
      returnObjects: true,
      ...params,
    });
  }

  const containerRef = useRef(null);

  const [selectOpen, setSelectOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    console.log(form);

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
          setTimeout(() => {
            setSubmitted(false);
            onClose();
          }, 3000);
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
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-20 duration-200 ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none collapse opacity-0"}`}
      onClick={() => onClose()}
    >
      {/* MAIN CONTENT */}
      <div
        className={`relative h-[80dvh] max-h-[624px] w-11/12 max-w-[822px] rounded-[24px] border border-white border-opacity-20 bg-neutral-900 duration-[400ms] sm:overflow-hidden ${open ? "translate-y-0 scale-100" : "translate-y-4 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="scrollbar-hidden h-full overflow-y-scroll scroll-smooth px-10 py-10 max-md:px-4"
          ref={containerRef}
        >
          {/* modal-close-btn */}
          <button
            className="absolute right-0 top-0 -translate-y-6"
            onClick={() => onClose()}
          >
            <Alisher.Close400 className="w-6 fill-white" />
          </button>
          {/* ==== MODAL HEADER ==== */}
          <div className="flex flex-col items-center">
            {/* TITLE */}
            <h4 className="mb-3 text-center text-[30px] leading-8 text-white">
              {t("TITLE")}
            </h4>

            {/* SUBTITLE */}
            <h4 className="mb-14 max-w-[389px] text-center text-[18px] leading-[1.2] tracking-[1px] text-white max-md:mb-8 max-md:text-[14px]">
              {t("SUBTITLE")}
            </h4>
          </div>

          {/* MODAL-BG */}
          <Image
            src={bg}
            alt=""
            className="absolute -left-10 top-1/2 w-full max-w-[616px] translate-y-[-40%] object-contain"
          />

          {/* ==== MODAL BODY ==== */}
          <div className="relative flex items-center justify-end">
            {/* === MODAL FORM === */}
            <form className="w-full md:max-w-[360px]" onSubmit={submit}>
              {/* NAME INPUT */}
              <div className="input-wrapper mb-4">
                <h4 className="leading-3.5 m-1.5 text-[14px] text-white max-md:text-base">
                  {t("USERNAME.label")}
                </h4>
                <div className="rounded-[12px] border-2 border-white border-opacity-10 bg-stone-300 bg-opacity-10 px-4 backdrop-blur-[8px] focus-within:border-opacity-40 max-md:px-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("USERNAME.placeholder")}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent py-4 text-[14px] text-white outline-0 placeholder:text-neutral-400 max-md:py-4 max-md:text-[14px]"
                  />
                </div>
              </div>

              {/* PHONE INPUT */}
              <div className="input-wrapper mb-4">
                <h4 className="leading-3.5 m-1.5 text-[14px] text-white max-md:text-base">
                  {t("PHONE.label")}
                </h4>
                <div className="rounded-[12px] border-2 border-white border-opacity-10 bg-stone-300 bg-opacity-10 px-4 backdrop-blur-[8px] focus-within:border-opacity-40 max-md:px-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("PHONE.placeholder")}
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full bg-transparent py-4 text-[14px] text-white outline-0 placeholder:text-neutral-400 max-md:py-4 max-md:text-[14px]"
                  />
                </div>
              </div>

              {/* COURSE SELECT */}
              <div className="input-wrapper mb-4">
                <h3 className="leading-3.5 m-1.5 text-[14px] text-white max-md:text-base">
                  {t("COURSE.label")}
                </h3>
                <div className="relative z-[1]">
                  {/* dropdown-header */}
                  <div className="flex items-center gap-x-2 rounded-[12px] border-2 border-white border-opacity-10 bg-stone-300 bg-opacity-10 backdrop-blur-[20px] focus-within:border-opacity-40">
                    <button
                      className="flex h-full w-full items-center justify-between p-4"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectOpen(!selectOpen);
                        if (!selectOpen) {
                          containerRef.current.scrollTop =
                            containerRef.current.scrollHeight;
                        }
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          setSelectOpen(false);
                        }, 100);
                      }}
                    >
                      <h4
                        className={`leading-3.5 -mb-0.5 bg-transparent text-[14px] outline-0 max-md:text-[14px] ${
                          form.course ? "text-white" : "text-neutral-400"
                        }`}
                      >
                        {form.course || t("COURSE.placeholder")}
                      </h4>
                      <Alisher.Chevron300 className="w-[14px] fill-zinc-400" />
                    </button>
                  </div>

                  {/* Dropdown Options */}
                  <div
                    className={`absolute inset-0 bottom-auto top-0 z-[-1] mt-2 overflow-hidden rounded-[12px] border-2 border-white border-opacity-10 bg-stone-300 bg-opacity-15 backdrop-blur-[20px] duration-[250ms] ${
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
                          setSelectOpen(false); // Close the dropdown after selection
                        }}
                        className="w-full border-b border-white border-opacity-10 bg-white bg-opacity-0 px-4 py-3 text-start last:border-0 hover:bg-opacity-10 max-md:px-4 max-md:py-3"
                      >
                        <p className="leading-4.5 text-[14px] text-white opacity-70 max-md:text-[14px]">
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

              {/* SUBMIT BUTTON */}
              <button
                className={`ml-auto mt-10 block w-full max-w-[198px] rounded-[12px] border border-stone-300 py-3 max-md:mx-auto max-md:max-w-[249px] max-md:rounded-[12px] max-md:py-2 ${
                  submitted ? "bg-green-600" : "bg-white"
                }`}
                disabled={submitted} // Disable the button when submitted
              >
                <h4 className="text-[20px] tracking-[1px] text-black max-md:text-base">
                  {submitted ? t("SUBMIT_BTN") : t("SUBMITTED_BTN")}
                </h4>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
