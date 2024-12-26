import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Cityblock from "./Cityblock";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/discovercity.scss";

interface DiscovercityProps {
    cities: string[];
}

const Discovercity: React.FC<DiscovercityProps> = ({ cities }) => {
    return (
        <div className="discovercity-wrapper">
            <h2>Discover your city!</h2>
            <a href="#">View All</a>
            <div className="discover-slider">
                <Swiper
                    spaceBetween={27}
                    slidesPerView={4.5}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2500,
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {cities.map((city) => (
                        <SwiperSlide key={city}>
                            <Cityblock city={city} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Discovercity;
