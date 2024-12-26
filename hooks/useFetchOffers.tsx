"use client";
import { useState, useEffect, useMemo } from "react";

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
    description: string;
}

interface ApiResponse {
    offers: Offer[];
}

const API_KEY =
    "9a5d051cd43717f66a4c375e47ae5b86fcabc70a6eab8fa588a8a627944542716d73741433853995f85514a907b65f7710546a831144c95126f44815c014d012";
const API_SECRET =
    "059813a8b9973dad7eaa5d9118f8a1ea2f2235abb7446dac7eba88a86d3b90b4b3841bf4df27303b5039f5ab3e670ec3494f50e6afb3e54c00ce106a89e38036";

export const useFetchOffers = () => {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/offer", {
                    method: "GET",
                    headers: {
                        "x-api-key": API_KEY,
                        "x-api-secret": API_SECRET,
                    },
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const result: ApiResponse = await res.json();
                setOffers(result.offers);
            } catch (err) {
                setError((err as Error).message || "Error fetching data");
            }
        };

        fetchData();
    }, []);

    const memoizedOffers = useMemo(() => offers, [offers]);

    return { offers: memoizedOffers, error };
};
