import PropTypes from "prop-types";
import "./Reviews.scss";
import starStuffed from "/src/assets/starStuffed.svg";
import starEmpty from "/src/assets/starEmpty.svg";
const Reviews = ({ review }) => {
  return (
    <div className="reviews">
      {[...new Array(4)].map((item, index) => {
        return index < review ? (
          <img key={index} src={starStuffed} />
        ) : (
          <img key={index} src={starEmpty} />
        );
      })}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  review: PropTypes.string,
};
