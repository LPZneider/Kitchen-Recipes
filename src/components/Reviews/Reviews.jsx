import PropTypes from "prop-types";
import "./Reviews.scss";
const Reviews = ({ review }) => {
  return (
    <div className="reviews">
      {[...new Array(4)].map((item, index) => {
        return index < review ? (
          <img src="/src/assets/starStuffed.svg" />
        ) : (
          <img src="/src/assets/starEmpty.svg" />
        );
      })}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  review: PropTypes.number,
};