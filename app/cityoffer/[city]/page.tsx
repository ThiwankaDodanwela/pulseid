"use client";
import React from "react";
import { useFetchOffers } from "../../../hooks/useFetchOffers";
import { usePathname } from "next/navigation";
import SpecialOffers from "@/components/Offers/SpecialOffers";
import FilterTags from "@/components/FilterTags";
import ListingOffers from "@/components/Offers/ListingOffers";
import Image from "next/image";
import Link from "next/link";
import "normalize.css";
import "../../../styles/global.scss";
import "../../../styles/offers.scss";

interface Category {
    name: string;
}

interface Merchant {
    name: string;
    id: number;
    category: Category;
    image: string;
    returnPeriod: string | null;
    website: string | null;
}

interface Offer {
    id: string;
    images: string[];
    merchant: Merchant;
    title: string;
    timezone: string;
}

const CityOffer: React.FC = () => {
    const pathname = usePathname();
    const city = pathname ? pathname.split("/").pop() : null;
    const { offers = [], error } = useFetchOffers();

    if (!city) {
        return <div className="fullscreen-msg">Loading...</div>;
    }

    const filteredOffers: Offer[] = offers.filter((offer) => {
        const [, offerCity] = offer.timezone.split("/") || [];
        return offerCity?.toLowerCase() === city.toLowerCase();
    });

    console.log("Filtered Offers:", filteredOffers);

    if (error) {
        return <div className="fullscreen-msg">Error: {error}</div>;
    }

    return (
        <div className="cityoffers">
            <div className="cityoffers-image">
                <Image
                    src={`/images/${city.toLowerCase()}.jpg`}
                    alt={city}
                    width={300}
                    height={215}
                    style={{ width: "100%", height: "215px" }}
                />
                <div className="city-name">{city}</div>
                <Link href="/">
                    <Image
                        src="/images/previous.svg"
                        alt="Back"
                        width={36}
                        height={36}
                        className="back-link"
                    />
                </Link>
            </div>
            <div className="cityoffers-content">
                <SpecialOffers />
                <FilterTags city={city} />
                <ListingOffers filteredOffers={filteredOffers} />
            </div>
        </div>
    );
};

export default CityOffer;
