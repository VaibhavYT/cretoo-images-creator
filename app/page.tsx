"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { images } from "@/lib/images";
import { PiShareFat } from "react-icons/pi";
import { CgFileAdd } from "react-icons/cg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="flex justify-center items-center">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-128 w-1/2 items-center justify-center swiper-slide">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-350 w-320  object-cover rounded-lg "
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="text-2xl flex justify-center items-center font-medium text-white mb-2">
        Cretoo
      </div>
      <div className="justify-center items-center flex text-3xl text-white text-light mb-3">
        A girl with angle wings on her head
      </div>
      <div className=" justify-evenly px-550 items-center flex text-light text-base text-white mb-3">
        <span>Cretoo Image </span>
        <span>1400 x 1440 px</span>
        <span>JPG</span>
        <span>1 minute ago </span>
      </div>
      <div className="flex justify-center items-center ">
        <button className="text-white py-2 border-2 border-white px-10 rounded-xl bg-transparent m-4 flex">
        <div className="pr-1 pt-px">
        <PiShareFat size={18} />
        </div>
          Share
        </button>
        <button className="text-white py-2 border-2 border-white px-10 rounded-xl bg-transparent m-2 flex">
        <div className="pr-2 pt-px">
        <CgFileAdd size={20} />
        </div>
          Save
        </button>
        <button className="text-white py-2 border-2 border-white px-10 rounded-xl bg-transparent m-2 flex
        ">
          <div className="pr-2 pt-px">
        <AiOutlineCloudDownload size={20} />
        </div>
          Download
        </button>
      </div>
      <div className="flex justify-center items-center text-white opacity-50 text-xs mt-5">
        Supported By DALL.E 3
      </div>
    </>
  );
}
