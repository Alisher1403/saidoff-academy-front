import React, { useMemo } from "react";
import Image from "next/image";
import grainBg from "../../../public/img/grain.png";
//import images
import img1 from "../../../public/Images/community_img/community_img1.png";
import img2 from "../../../public/Images/community_img/community_img2.png";
import img3 from "../../../public/Images/community_img/community_img3.png";
import img4 from "../../../public/Images/community_img/community_img4.png";

function CommunityLife() {
  const mapData = useMemo(() => {
    let result = [];
    for (let i = 0; i < data.length; i += 2) {
      result.push([data[i], data[i + 1]]);
    }

    return result;
  }, []);

  return (
    <div className="relative bg-main-bg py-[100px]">
      {/* GRAIN EFFECT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto w-11/12">
        <div className="communitylife_main">
          {/*community life title start*/}
          <div>
            <h4 className="text-center text-[64px] text-white max-md:text-4xl">
              Jamoa hayoti
            </h4>
          </div>
          {/*community life title end*/}

          {/* community life decktop start*/}
          <div className="mt-20 grid grid-cols-3 gap-x-3 gap-y-8 max-md:grid-cols-2">
            {mapData.map((item, index) => {
              const even = index % 2 === 0;

              return (
                <React.Fragment key={index}>
                  {" "}
                  {/* Key on Fragment */}
                  <div
                    className={`h-[475px] grayscale-[100%] duration-200 max-xl:h-[230px] md:hover:grayscale-0 ${even ? "col-span-2" : "col-span-1"}`}
                  >
                    <Image
                      src={item[0]}
                      alt=""
                      className="h-full w-full object-cover"

                    />
                  </div>
                  {item[1] ? (
                    <div
                      className={`h-[475px] grayscale-[100%] duration-200 max-xl:h-[230px] md:hover:grayscale-0 ${even ? "col-span-1" : "col-span-2"}`}
                    >
                      <Image
                        src={item[1]}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityLife;

const data = [img1, img2, img3, img4];
