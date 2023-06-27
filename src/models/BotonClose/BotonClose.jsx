import PropTypes from "prop-types";
import { useContext } from "react";
import closeModal from "/src/assets/closeModal.svg";
import FormContext from "../../context/FormContext";
import "./BotonClose.scss";
const BotonClose = ({ isForm = false, funcForm }) => {
  const { handleListModal } = useContext(FormContext);
  return (
    <div className="container-btn-close">
      <button
        onClick={isForm ? funcForm : handleListModal}
        className="btn-close"
      >
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
