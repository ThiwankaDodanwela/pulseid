import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/discovercity.scss";

interface CityblockProps {
    city: string;
}

const Cityblock: React.FC<CityblockProps> = ({ city }) => {
    return (
        <SwiperSlide key={city.toLowerCase()}>
            <div className="country-block">
                <div className="country-block__image">
                    <Link href={`/cityoffer/${city.toLowerCase()}`}>
                        <Image
                            src={`/images/${city.toLowerCase()}.jpg`}
                            alt={city}
                            width={54}
                            height={54}
                        />
                    </Link>
                </div>
                <Link href={`/cityoffer/${city}`}>
                    <p className="country-block__name">{city}</p>
                </Link>
            </div>
        </SwiperSlide>
    );
};

export default Cityblock;
