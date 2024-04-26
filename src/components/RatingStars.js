import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

function RatingStars({ rating }) {
    const fillUp = Math.floor(rating);
    const partFilledStar = fillUp + 1;

    const starfiller = (starIndex) => {
        if (starIndex + 1 <= fillUp) {
            return "100%";
        } else if (starIndex + 1 === partFilledStar) {
            return `${Math.floor((rating - fillUp) * 100)}%`;
        } else {
            return "0%";
        }
    };

    return (
        <div className="rating">
            {Array(5).fill(0).map((_, index) => (
                <div className="star" key={index}>
                    <div className="starFull" style={{ width: starfiller(index) }}>
                        <BsStarFill />
                    </div>
                    <div className="starEmpty">
                        <BsStar />
                    </div>
                </div>
            ))}
        </div>
    );
}
export default RatingStars;
