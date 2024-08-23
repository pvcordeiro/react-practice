import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function Rating(param) {
    const [rating, setRating] = useState(null);

    function handleButtonClick(value) {
        setRating((deselect) => (deselect === value ? null : value));
    }

    function handleSubmit() {
        if (rating !== null) {
            param.onRatingSubmit(rating);
        }
    }

    return (
        <div className="ratingContainer">
            <div className="textArea">
                <div className="star">
                    <Star />
                </div>
                <h1 className="ratingH1">How did we do?</h1>
                <p className="ratingP">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="numbersContainer">
                <button
                    className={`numbers ${rating === 1 ? "selected" : ""}`}
                    onClick={() => handleButtonClick(1)}
                >
                    1
                </button>
                <button
                    className={`numbers ${rating === 2 ? "selected" : ""}`}
                    onClick={() => handleButtonClick(2)}
                >
                    2
                </button>
                <button
                    className={`numbers ${rating === 3 ? "selected" : ""}`}
                    onClick={() => handleButtonClick(3)}
                >
                    3
                </button>
                <button
                    className={`numbers ${rating === 4 ? "selected" : ""}`}
                    onClick={() => handleButtonClick(4)}
                >
                    4
                </button>
                <button
                    className={`numbers ${rating === 5 ? "selected" : ""}`}
                    onClick={() => handleButtonClick(5)}
                >
                    5
                </button>
            </div>
            <button
                className="submit"
                onClick={handleSubmit}
                disabled={rating === null}
            >
                S U B M I T
            </button>
        </div>
    );
}

Rating.propTypes = {
    onRatingSubmit: PropTypes.func,
};

export default Rating;
