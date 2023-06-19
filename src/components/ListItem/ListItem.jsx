import PropTypes from "prop-types";
import "./ListItem.scss";
import { ModalPortal } from "../ModalPortal/";
import { useContext, useState } from "react";
import { BotonActive } from "../BotonActive";
import TableContext from "../../context/CrudTableContext";
import { Reviews } from "../Reviews/";
import FormContext from "../../context/FormContext";

export const ListItem = ({ el }) => {
  const { name, reviews, cooked, ingredients, preparation, peso, id } = el;
  const { handleCheckboxCooked } = useContext(TableContext);
  const { dataUpdate } = useContext(FormContext);
  const [listModal, setListModal] = useState(false);
  const handleListModal = () => setListModal(!listModal);
  return (
    <>
      <tr className="table-item" onClick={handleListModal}>
        <td>{name}</td>
        <td>
          <Reviews review={reviews} />
        </td>
        <td>
          <BotonActive
            funActive={handleCheckboxCooked}
            isChecked={cooked}
            idElement={id}
          />
        </td>
        <td>{peso}</td>
        {listModal && (
          <ModalPortal>
            <div className="recipe-item">
              <h2>{name}</h2>
              <h3>Ingredients</h3>
              <ul>
                {ingredients.map((el, index) => (
                  <li key={index}>{el.name}</li>
                ))}
              </ul>
              <h3>Preparation</h3>
              <p>{preparation}</p>
              <h3>Review</h3>
              <Reviews review={reviews} />

              <h4>Copked before</h4>
              <BotonActive
                funActive={handleCheckboxCooked}
                isChecked={cooked}
                idElement={id}
              />
              <div>
                <input
                  type="submit"
                  value="Edit"
                  onClick={() => {
                    handleListModal();
                    dataUpdate(el);
                  }}
                />
              </div>
            </div>
          </ModalPortal>
        )}
      </tr>
    </>
  );
};

ListItem.propTypes = {
  el: PropTypes.object,
};
