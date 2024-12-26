import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../../styles/offers.scss";

import { EffectCoverflow, Pagination } from "swiper/modules";

const TrendingOffers: React.FC = () => {
    return (
        <div className="trending-offers">
            <h2>Trending Offer</h2>
            <Swiper
                effect={"coverflow"}
                spaceBetween={0}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -100,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="offers-swiper"
            >
                <SwiperSlide>
                    <div className="offer-card">
                        <Image
                            src="https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png"
                            alt="Landscape picture"
                            width={800}
                            height={500}
                        />
                        <div className="offer-content">
                            <span className="location">Tokyo</span>
                            <h3>Parfaiteria bel</h3>
                            <span className="rating">5.0</span>{" "}
                            <span className="reviews">120 reviews</span>
                            <Link href="/target-page" className="see-more">
                                See more
                                <span className="see-more__icon">
                                    <Image
                                        src="/images/next.svg"
                                        alt="Landscape picture"
                                        width={36}
                                        height={36}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="offer-card">
                        <Image
                            src="https://ctlstg-cdn.pulseid.com/JER2s24FGy/5d492b58-ff69-4cdb-a362-22ba67000ac4.jpg"
                            alt="Landscape picture"
                            width={800}
                            height={500}
                        />
                        <div className="offer-content">
                            <span className="location">Tokyo</span>
                            <h3>Parfaiteria bel</h3>
                            <span className="rating">4.6</span>{" "}
                            <span className="reviews">70 reviews</span>
                            <Link href="/target-page" className="see-more">
                                See more
                                <span className="see-more__icon">
                                    <Image
                                        src="/images/next.svg"
                                        alt="Landscape picture"
                                        width={36}
                                        height={36}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="offer-card">
                        <Image
                            src="https://ctlstg-cdn.pulseid.com/yo0MbKkNyC/90c12716-cb12-4289-897a-4ac58eb50899.png"
                            alt="Landscape picture"
                            width={800}
                            height={500}
                        />
                        <div className="offer-content">
                            <span className="location">Tokyo</span>
                            <h3>Parfaiteria bel</h3>
                            <span className="rating">4.0 </span>{" "}
                            <span className="reviews">80 reviews</span>
                            <Link href="/target-page" className="see-more">
                                See more
                                <span className="see-more__icon">
                                    <Image
                                        src="/images/next.svg"
                                        alt="Landscape picture"
                                        width={36}
                                        height={36}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TrendingOffers;
