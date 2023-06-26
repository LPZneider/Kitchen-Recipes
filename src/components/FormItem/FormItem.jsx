import PropTypes from "prop-types";
import { useContext } from "react";
import FormContext from "../../context/FormContext";
import "./FormItem.scss";
import deleteItem from "/src/assets/deleteItem.svg";
import addItem from "/src/assets/addItem.svg";

const FormItem = ({ inpt: { id, name }, cant }) => {
  const { forms, handleIngredients, handleCreateItem, handleDeleteItem } =
    useContext(FormContext);
  return (
    <li>
      <section className="item-ingredient">
        <input
          required
          type="text"
          autoComplete="off"
          placeholder="Type ingredient"
          id={id}
          name={id}
          value={name}
          onChange={(e) => handleIngredients(e, id)}
        />
        {forms.ingredients.length !== cant + 1 ? (
          <button value="eliminar" onClick={(e) => handleDeleteItem(e, id)}>
            <img src={deleteItem} alt="X" />
          </button>
        ) : (
          <button value="agregar" onClick={handleCreateItem}>
            <img src={addItem} alt="+" />
          </button>
        )}
      </section>
    </li>
  );
};

export default FormItem;

FormItem.propTypes = {
  inpt: PropTypes.object,
  cant: PropTypes.number,
};
