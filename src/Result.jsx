import PropTypes from "prop-types";
import Phone from "./Phone";

function Result(param) {
    return (
        <div className="resultContainer">
            <div className="phone">
                <Phone />
            </div>
            <div className="orangePContainer">
                <p className="orangeP">You selected {param.rating} out of 5</p>{" "}
            </div>
            <h1 className="resultH1">Thank You!</h1>
            <p className="resultP">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
}

Result.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Result;
