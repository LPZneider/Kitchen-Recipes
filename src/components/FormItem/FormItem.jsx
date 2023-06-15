import PropTypes from "prop-types";
import { useContext } from "react";
import FormContext from "../../context/FormContext";
import "./FormItem.scss";

const FormItem = ({ inpt: { id, name }, cant }) => {
  const { forms, handleIngredients, handleCreateItem, handleDeleteItem } =
    useContext(FormContext);
  return (
    <li>
      <section className="item-ingredient">
        <input
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
            <img src="/src/assets/deleteItem.svg" alt="X" />
          </button>
        ) : (
          <button value="agregar" onClick={handleCreateItem}>
            <img src="/src/assets/addItem.svg" alt="+" />
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
