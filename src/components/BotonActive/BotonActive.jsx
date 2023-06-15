import "./BotonActive.scss";

const BotonActive = () => {
  const handleClick = (e) => e.stopPropagation();
  const idInput = Date.now();
  return (
    <label htmlFor="isActive" className="content-input" onClick={handleClick}>
      <input type="checkbox" name="isActive" id={idInput} />
      <i></i>
    </label>
  );
};

export default BotonActive;
