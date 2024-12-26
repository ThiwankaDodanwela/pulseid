"use client";
import { usePathname } from "next/navigation";
import { useFetchOffers } from "../../../hooks/useFetchOffers";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Details from "@/components/Details";
import "normalize.css";
import "../../../styles/global.scss";
import "../../../styles/offers.scss";

const OfferDetails: React.FC = () => {
    const pathname = usePathname();
    const id = useMemo(
        () => (pathname ? pathname.split("/").pop() : null),
        [pathname]
    );

    const { offers, error } = useFetchOffers();

    const offer = useMemo(() => {
        if (!offers || !id) {
            return null;
        }
        return offers.find((offer) => String(offer.id) === id);
    }, [offers, id]);

    const otherOffers = useMemo(() => {
        if (!offers || !id) {
            return [];
        }
        return offers.filter((offer) => String(offer.id) !== id);
    }, [offers, id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!id || !offers) {
        return <div className="fullscreen-msg">Loading...</div>;
    }

    if (!offer) {
        return <div className="fullscreen-msg">Offer not found</div>;
    }

    return (
        <div className="details-wrapper">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={false}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide key={offer.id}>
                    <Details offer={offer} />
                </SwiperSlide>
                {otherOffers.map((otherOffer) => (
                    <SwiperSlide key={otherOffer.id}>
                        <Details offer={otherOffer} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OfferDetails;
