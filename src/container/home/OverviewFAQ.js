import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Alisher } from "../../../public/icon/icon";
import { useTranslation } from "next-i18next";
import { useParams } from "next/navigation";

function OverviewFaq({ faq }) {
  const [activeAccordion, setActiveAccordion] = useState();
  const [accordionHeight, setAccordionHeight] = useState(0);
  const accordionRef = useRef([]);
  const params = useParams();

  useLayoutEffect(() => {
    setActiveAccordion(0);
  }, [accordionRef]);

  useEffect(() => {
    setAccordionHeight(
      accordionRef.current[activeAccordion || 0]?.scrollHeight,
    );
  }, [params, activeAccordion]);

  const { t: translate, i18n } = useTranslation();
  const lang = i18n.language;

  function t(str, params) {
    return translate(`OVERVIEW_FAQ.${str}`, {
      ns: "Home",
      returnObjects: true,
      ...params,
    });
  }

  return (
    <div className="relative z-[5] bg-main-bg py-[100px]">
      {/* ===== MAIN CONTENT ===== */}
      <div className="container relative z-10 mx-auto w-11/12">
        {/* title */}
        <h4 className="mb-[91px] bg-gradient-title bg-clip-text text-center text-[64px] leading-[70px] tracking-[1px] text-transparent max-xl:text-[38px] max-xl:leading-[46px] max-md:mb-8">
          {t("TITLE")}
        </h4>

        {/* Accordions */}
        <div className="mx-auto max-w-[823px] border-y border-neutral-700">
          {faq?.map((item, index) => {
            const isActive = activeAccordion === index;

            return (
              <button
                key={index}
                className="block w-full border-b border-neutral-700 last:border-none"
                onClick={() => {
                  if (isActive) {
                    setActiveAccordion(null);
                  } else {
                    setActiveAccordion(index);
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  {/* header-title */}
                  <div className="accordion-header flex items-center justify-between gap-x-3 py-6 max-md:py-4">
                    <p className="title leading-6.5 max-md:leading-5.5 text-start text-[22px] text-stone-300 max-md:text-base">
                      {item?.[`question_${lang}`]}
                    </p>

                    {/* icon */}
                    <Alisher.Arrow700
                      className={`w-8 min-w-8 stroke-zinc-800 duration-200 max-md:w-6 max-md:min-w-6 ${
                        isActive ? "-rotate-90 fill-white" : "fill-stone-500"
                      }`}
                    />
                  </div>

                  {/* body-description */}
                  <div
                    className="accordion-body duration-300"
                    style={{
                      height: isActive ? `${accordionHeight}px` : `0px`,
                    }}
                  >
                    <div
                      className="py-9 max-md:pb-3 max-md:pt-0"
                      ref={(e) => (accordionRef.current[index] = e)}
                    >
                      <p className="description leading-6.5 max-md:leading-3.5 text-start text-[18px] text-white max-md:text-[12px]">
                        {item?.[`answer_${lang}`]}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OverviewFaq;
