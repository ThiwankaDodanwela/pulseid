"use client";
import { useMemo } from "react";
import { useFetchOffers } from "../hooks/useFetchOffers";
import "normalize.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface FilterTagsProps {
    city: string;
}

const FilterTags: React.FC<FilterTagsProps> = ({ city }) => {
    const { offers, error } = useFetchOffers();

    const categories = useMemo(() => {
        return offers
            .map((offer) => offer.merchant?.category?.name)
            .filter(
                (value, index, self) => value && self.indexOf(value) === index
            );
    }, [offers]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="filter-tags">
            <h2>Explore {city}’s best category</h2>
            <Swiper
                spaceBetween={8}
                slidesPerView={"auto"}
                centeredSlides={false}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
            >
                <SwiperSlide key="all" className="tags">
                    <span>
                        <Image
                            src={`/images/tag-1.svg`}
                            alt="All"
                            width={26}
                            height={26}
                        />
                    </span>
                    All
                </SwiperSlide>
                {categories.map((category) => (
                    <SwiperSlide key={category} className="tags">
                        <span>
                            <Image
                                src={`/images/tag-1.svg`}
                                alt={category}
                                width={26}
                                height={26}
                            />
                        </span>
                        {category}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default FilterTags;
