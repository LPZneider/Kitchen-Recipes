import PropTypes from "prop-types";
import "./ListItem.scss";
import { ModalPortal } from "../ModalPortal/ModalPortal";
import { useState } from "react";
export const ListItem = ({
  el: { name, reviews, cooked, ingredients, preparation, peso },
}) => {
  const [listModal, setListModal] = useState(false);
  const handleListModal = () => setListModal(!listModal);
  return (
    <>
      <tr className="table-item" onClick={handleListModal}>
        <td>{name}</td>
        <td>{reviews}</td>
        <td>{cooked ? "active" : "inactive"}</td>
        <td>{peso}</td>
        {listModal && (
          <ModalPortal>
            <h2>{name}</h2>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>Preparation</h3>
            <p>{preparation}</p>

            <h3>Review</h3>
            {reviews}

            <h4>Copked before</h4>
            {cooked}
          </ModalPortal>
        )}
      </tr>
    </>
  );
};

ListItem.propTypes = {
  el: PropTypes.object,
};
