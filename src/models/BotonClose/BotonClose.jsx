import PropTypes from "prop-types";
import closeModal from "/src/assets/closeModal.svg";
import "./BotonClose.scss";
const BotonClose = ({ funcForm }) => {
  return (
    <div className="container-btn-close">
      <button onClick={funcForm} className="btn-close">
        <img src={closeModal} alt="close Modal" />
      </button>
    </div>
  );
};
export default BotonClose;
BotonClose.propTypes = {
  isForm: PropTypes.bool,
  funcForm: PropTypes.func,
};
