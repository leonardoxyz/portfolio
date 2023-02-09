import React from 'react';
import "./opinions.css";
import { Data } from './Data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Opinions = () => {
    return (
        <section className="opinions container section" id="opinions">
            <h2 className="section__title">My teachers say</h2>
            <span className="section__subtitle">A little about my</span>

            <Swiper className="opinions__container"
                loop={false}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="opinions__card" key={id}>
                            <img src={image} alt="" className="opinions__img" />

                            <h3 className="opinions__name">{title}</h3>
                            <p className="opinions__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Opinions;
