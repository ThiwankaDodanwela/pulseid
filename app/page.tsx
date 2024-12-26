"use client";
import { useMemo } from "react";
import { useFetchOffers } from "../hooks/useFetchOffers";
import "normalize.css";
import "../styles/global.scss";
import "../styles/home.scss";
import Header from "../components/Header";
import Discovercity from "../components/Discovercity";
import TrendingOffers from "../components/Offers/TrendingOffers";
import SpecialOffersSingle from "../components/Offers/SpecialOffersSingle";

const Home: React.FC = () => {
    const { offers, error } = useFetchOffers();

    const cities = useMemo(() => {
        return offers
            .map((offer) => offer.timezone.split("/")[1])
            .filter((value, index, self) => self.indexOf(value) === index);
    }, [offers]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Header />
            <Discovercity cities={cities} />
            <TrendingOffers />
            <SpecialOffersSingle />
        </>
    );
};

export default Home;
