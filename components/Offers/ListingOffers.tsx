"use client";
import Image from "next/image";
import Link from "next/link";
import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

interface ListingOffersProps {
    filteredOffers: Offer[];
}

const ListingOffers: React.FC<ListingOffersProps> = ({ filteredOffers }) => {
    if (!filteredOffers || filteredOffers.length === 0) {
        return <div>No offers available for this city.</div>;
    }

    return (
        <div className="listing-offers">
            {filteredOffers.map((offer) => (
                <div key={offer.id} className="listing-offers-item">
                    <div className="listing-offers-item__image">
                        <div>
                            <Link href={`/offerdetails/${offer.id}`}>
                                <Image
                                    src={
                                        offer.images[0]
                                            ? offer.images[0]
                                            : "/images/noimage.jpg"
                                    }
                                    alt={offer.title}
                                    width={164}
                                    height={162}
                                />
                            </Link>
                            <div className="merchant">
                                <Image
                                    src={
                                        offer.merchant.image
                                            ? offer.merchant.image
                                            : "/images/noimage.jpg"
                                    }
                                    alt={offer.merchant.name}
                                    width={22}
                                    height={22}
                                />
                                <span>{offer.merchant.name}</span>
                            </div>
                            <Image
                                src="/images/heart.svg"
                                alt=""
                                width={14}
                                height={12}
                                className="heart-icon"
                            />
                        </div>
                    </div>
                    <h3>{offer.title}</h3>
                    <div className="listing-offers-category">
                        {offer.merchant.category.name && (
                            <div>{offer.merchant.category.name}</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ListingOffers;
