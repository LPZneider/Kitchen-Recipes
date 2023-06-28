import PropTypes from "prop-types";
import "./TableItem.scss";
import { useContext, useState } from "react";
import { BotonActive } from "../../../../models/BotonActive";
import TableContext from "../../../../context/CrudTableContext";
import { Reviews } from "../../../../models/Reviews";
import ItemModal from "../../../Modal/components/ItemModal/ItemModal";

const TableItem = ({ el }) => {
  const { name, reviews, cooked, peso, id } = el;
  const { handleCheckboxCooked } = useContext(TableContext);
  const [listModal, setListModal] = useState(false);
  const handleListModal = () => setListModal(!listModal);

  return (
    <>
      <tr className="table-item" onClick={handleListModal}>
        <td>{name.split(" ").slice(0, 6).join(" ")}</td>
        <td>
          <Reviews review={String(reviews)} />
        </td>
        <td>
          <BotonActive
            funActive={handleCheckboxCooked}
            isChecked={cooked}
            idElement={id}
          />
        </td>
        <td>{String(peso).split("").slice(0, 3).join("")}</td>
        {listModal && <ItemModal el={id} handleListModal={handleListModal} />}
      </tr>
    </>
  );
};
export default TableItem;
TableItem.propTypes = {
  el: PropTypes.object,
};
