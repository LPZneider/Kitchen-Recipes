import PropTypes from "prop-types";
import { useContext } from "react";
import FormContext from "../../context/FormContext";
import "./FormItem.scss";

const FormItem = ({ inpt }) => {
  const { forms, handleIngredients, handleCreateItem, handleDeleteItem } =
    useContext(FormContext);
  return (
    <li>
      <section className="item-ingredient">
        <input
          type="text"
          autoComplete="off"
          placeholder="Type ingredient"
          id={inpt.id}
          name={inpt.id}
          value={inpt.name}
          onChange={(e) => handleIngredients(e, inpt.id)}
        />
        {forms.ingredients.length >= 1 ? (
          <button value="agregar" onClick={handleCreateItem}>
            <img src="/src/assets/addItem.svg" alt="+" />
          </button>
        ) : null}
        {forms.ingredients.length > 1 ? (
          <button
            value="eliminar"
            onClick={(e) => handleDeleteItem(e, inpt.id)}
          >
            <img src="/src/assets/deleteItem.svg" alt="X" />
          </button>
        ) : null}
      </section>
    </li>
  );
};

export default FormItem;

FormItem.propTypes = {
  inpt: PropTypes.object,
};
