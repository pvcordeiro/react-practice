import { useState } from "react";
import Rating from "./Rating";
import Result from "./Result";

function App() {
    const [selectedRating, setSelectedRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    function handleRatingSubmit(rating) {
        setSelectedRating(rating);
        setSubmitted(true);
    }

    return (
        <>
            {submitted ? (
                <Result rating={selectedRating} />
            ) : (
                <Rating onRatingSubmit={handleRatingSubmit} />
            )}
        </>
    );
}

export default App;
