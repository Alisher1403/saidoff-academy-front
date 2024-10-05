import React from "react";
import Image from "next/image";
import Icon1 from "/public/img/Icon1.png";
import Icon2 from "/public/img/Icon2.png";

function OurProgramsAnother() {
  return (
    <div className="relative z-10">
      <div className="to w-full bg-gradient-to-bl from-neutral-800 from-50% to-pink-500 py-10 pt-20 text-white">
        <div className="container mx-auto px-6 md:px-20">
          <h4 className="mb-10 text-center text-4xl md:text-left md:text-7xl">
            BOSHQA DASTURLARIMIZ
          </h4>

          <div className="items-center justify-center gap-10 lg:flex">
            <div className="border-gray-500/40 mx-auto my-10 h-auto w-full max-w-[415px] rounded-2xl border-2 bg-neutral-700/40 px-6 text-center backdrop-blur-lg backdrop-filter lg:mx-0 lg:h-[945px] lg:w-1/2">
              <div className="flex items-center justify-center py-12">
                <Image
                  className="hover:shadow-gray-500 rounded-full hover:shadow-lg"
                  src={Icon2}
                  width={200}
                  height={200}
                  alt="icon image_1"
                />
              </div>
              <div>
                <h4 className="text-3xl md:text-5xl">Real Amaliyot</h4>

                <h3 className="my-8 h-auto text-xl leading-8 md:text-2xl lg:h-80">
                  Nazariy o‘rganishlar qanchalik muhim bo‘lmasin, haqiqiy
                  dunyoda ishlash tajribasi sizni haqiqiy professional
                  dasturchiga aylantiradi. Bu jarayon nazariyani jonli
                  loyihalarga aylanadigan "sehrli ko'prik"dir.
                </h3>
              </div>

              <div className="my-10">
                <button className="m-auto flex w-52 items-center justify-between border-b border-white px-4 py-6 text-lg hover:bg-neutral-500/50">
                  <h3>BATAFSIL</h3>
                </button>
              </div>
            </div>

            <div className="border-gray-500/40 mx-auto h-auto w-full max-w-[415px] rounded-2xl border-2 bg-neutral-700/40 px-6 text-center backdrop-blur-lg backdrop-filter lg:mx-0 lg:h-[945px] lg:w-1/2">
              <div className="flex items-center justify-center py-12">
                <Image
                  src={Icon1}
                  width={200}
                  height={200}
                  alt="icon image_2"
                />
              </div>
              <div>
                <h4 className="text-3xl md:text-5xl">6+3 Dastur</h4>

                <h3 className="my-8 h-auto text-xl leading-8 md:text-2xl lg:h-80">
                  Dastlabki olti oyda o'quvchilar IT sohasining asosiy
                  tushunchalari bilan tanishadi. Bu jarayonda dasturlash
                  tillari, algoritmlar, ma'lumotlar bazasi asoslari va web
                  dasturlashning fundamental bilimlari beriladi. Keyingi uch oy
                  davomida o'quvchilar olgan nazariy bilimlarini haqiqiy
                  amaliyotda qo'llab, real loyihalarda ishlaydi.
                </h3>
              </div>

              <div className="mb-10">
                <button className="m-auto flex w-52 items-center justify-between border-b border-white px-4 py-6 text-lg hover:bg-neutral-500/50">
                  <h3>BATAFSIL</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProgramsAnother;
