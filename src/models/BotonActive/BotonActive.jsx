import "./BotonActive.scss";
import PropTypes from "prop-types";
const BotonActive = ({ isChecked, idElement, funActive }) => {
  const handleClick = (e) => e.stopPropagation();
  const idInput = Date.now();

  return (
    <label htmlFor="isActive" className="content-input" onClick={handleClick}>
      <input
        type="checkbox"
        value={idElement}
        name="isActive"
        id={idInput + idElement}
        checked={isChecked}
        disabled
      />
      <i onClick={(e) => funActive(e, idElement)}></i>
    </label>
  );
};

export default BotonActive;

BotonActive.propTypes = {
  isChecked: PropTypes.bool,
  idElement: PropTypes.number,
  funActive: PropTypes.func,
};
