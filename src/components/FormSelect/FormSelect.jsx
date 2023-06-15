import { useContext } from "react";
import "./FormSelect.scss";
import TableContext from "../../context/CrudTableContext";
export const FormSelect = () => {
  const { handleClickRadio, handleActive, active, radiovalue } =
    useContext(TableContext);
  return (
    <article className="select-container">
      <button onClick={handleActive}>
        Cooked before:
        <span>{radiovalue} </span>
        <img src="/src/assets/arrow.svg" alt="arrow" />
      </button>
      {active && (
        <div className="select-radios">
          <form onChange={handleClickRadio}>
            <label htmlFor="all">
              All
              <input
                type="radio"
                className={
                  radiovalue === "All" ? "my-radio-active" : "my-radio"
                }
                name="category"
                id="all"
                value="all"
              />
            </label>
            <label htmlFor="active">
              Active{" "}
              <input
                type="radio"
                className={
                  radiovalue === "Active" ? "my-radio-active" : "my-radio"
                }
                name="category"
                id="active"
                value="active"
              />
            </label>
            <label htmlFor="inactive">
              Inactive
              <input
                className={
                  radiovalue === "Inactive" ? "my-radio-active" : "my-radio"
                }
                type="radio"
                name="category"
                id="inactive"
                value="inactive"
              />
            </label>
          </form>
        </div>
      )}
    </article>
  );
};
