import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/offers.scss";

const SpecialOffersSingle: React.FC = () => {
    return (
        <div className="special-offers-single">
            <h2>Add card for special offers</h2>
            <div className="special-offers-single__image">
                <Image
                    src="/images/offer_image_1.jpg"
                    alt="Hokkaido"
                    width={343}
                    height={156}
                />
            </div>
        </div>
    );
};

export default SpecialOffersSingle;
