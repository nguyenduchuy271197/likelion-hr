"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children }: { children: ReactNode }) {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="relative max-w-3xl mx-auto">
      <Swiper
        spaceBetween={30}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <Button
        onClick={() => swiperRef.current?.slidePrev()}
        variant="ghost"
        className="w-16 h-16 absolute -left-20 top-1/2 -translate-y-1/2 z-10 hidden lg:flex"
      >
        <ChevronLeft className="w-12 h-12" />
      </Button>
      <Button
        onClick={() => swiperRef.current?.slideNext()}
        variant="ghost"
        className="w-16 h-16 absolute -right-20 top-1/2 -translate-y-1/2 z-10 hidden lg:flex p-3"
      >
        <ChevronRight className="w-12 h-12" />
      </Button>
    </div>
  );
}
