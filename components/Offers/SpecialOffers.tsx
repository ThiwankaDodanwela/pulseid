import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/offers.scss";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SpecialOffers: React.FC = () => {
    return (
        <div className="special-offers">
            <h2>Special offers</h2>
            <div className="special-offers__image">
                <Swiper
                    spaceBetween={27}
                    slidesPerView={1}
                    centeredSlides={false}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <Image
                            src="/images/offer_image_1.jpg"
                            alt="Hokkaido"
                            width={343}
                            height={156}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/images/offer_image_2.jpg"
                            alt="Hokkaido"
                            width={343}
                            height={156}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/images/offer_image_1.jpg"
                            alt="Hokkaido"
                            width={343}
                            height={156}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
export default SpecialOffers;
