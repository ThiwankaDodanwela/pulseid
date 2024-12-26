"use client";
import Image from "next/image";
import Link from "next/link";
import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/discovercity.scss";

interface Merchant {
    name: string;
    image: string | null;
}

interface Offer {
    title: string;
    description: string | null;
    images: string[];
    merchant: Merchant;
}

interface DetailsProps {
    offer: Offer;
}

const Details: React.FC<DetailsProps> = ({ offer }) => {
    const convertHtmlToText = (html: string) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    return (
        <div className="offerdetails">
            <Link href="/">
                <Image
                    src="/images/previous.svg"
                    alt="Back"
                    width={36}
                    height={36}
                    className="back-link"
                />
            </Link>
            <div className="heart-circle">
                <Image
                    src="/images/heart.svg"
                    alt="Back"
                    width={20}
                    height={17}
                />
            </div>

            <Image
                src={offer.images[0] ? offer.images[0] : "/images/noimage.jpg"}
                alt={offer.title}
                width={400}
                height={1000}
                className="offerdetails__image"
                style={{ width: "auto", height: "100vh", overflow: "hidden" }}
            />
            <div className="offerdetails__content">
                <div className="offerdetails__content-image-block">
                    <Image
                        src="/images/desert-1.jpg"
                        alt="Back"
                        width={54}
                        height={54}
                    />
                    <Image
                        src="/images/desert-2.jpg"
                        alt="Back"
                        width={54}
                        height={54}
                    />
                    <Image
                        src="/images/desert-3.jpg"
                        alt="Back"
                        width={54}
                        height={54}
                    />
                    <Image
                        src="/images/desert-4.jpg"
                        alt="Back"
                        width={54}
                        height={54}
                    />
                    <div className="remining-images"> 5+</div>
                </div>
                <div className="offerdetails__content-merchant">
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
                {offer.description && convertHtmlToText(offer.description)}
            </div>
        </div>
    );
};

export default Details;
