"use client"
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './style.css';

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
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
                className="block h-450 w-320  object-cover rounded-lg "
              />
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </>
  );
}
