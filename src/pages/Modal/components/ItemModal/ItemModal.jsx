import PropTypes from "prop-types";
import { BotonActive } from "../../../../models/BotonActive";
import { Reviews } from "../../../../models/Reviews";
import { useContext } from "react";
import TableContext from "../../../../context/CrudTableContext";
import FormContext from "../../../../context/FormContext";
import { ModalPortal } from "../../ModalPortal";

const ItemModal = ({ el = 0, handleListModal }) => {
  const { handleCheckboxCooked } = useContext(TableContext);

  const { table } = useContext(TableContext);

  const itemTable = [...table.filter((item) => item.id === el)];

  console.log(itemTable);
  const { dataUpdate } = useContext(FormContext);

  const { name, reviews, cooked, ingredients, preparation, id } = itemTable[0];

  return (
    <ModalPortal>
      <div className="recipe-item">
        <h2>{name}</h2>
        <h3>Ingredients</h3>
        <ul>
          {ingredients?.map((el, index) => (
            <li key={index}>{el.name}</li>
          ))}
        </ul>
        <h3>Preparation</h3>
        <p>{preparation}</p>
        <h3>Review</h3>
        <Reviews review={String(reviews)} />

        <h4>Copked before</h4>
        <BotonActive
          funActive={handleCheckboxCooked}
          isChecked={cooked}
          idElement={id}
        />
        <div className="recipe-item-div">
          <input
            type="submit"
            value="Edit"
            onClick={() => {
              handleListModal();
              dataUpdate(itemTable[0]);
            }}
          />
        </div>
      </div>
    </ModalPortal>
  );
};
export default ItemModal;

ItemModal.propTypes = {
  el: PropTypes.number,
  handleListModal: PropTypes.func,
};
