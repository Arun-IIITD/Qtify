import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ data, renderItem }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 6 },
      }}
      style={{
        paddingBottom: "20px",
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
