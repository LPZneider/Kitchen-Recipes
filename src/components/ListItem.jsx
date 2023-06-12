import PropTypes from "prop-types";
import "./ListItem.scss";
export const ListItem = ({ el: { name, reviews, cooked, peso } }) => {
  return (
    <tr className="table-item">
      <td>{name}</td>
      <td>{reviews}</td>
      <td>{cooked ? "active" : "inactive"}</td>
      <td>{peso}</td>
    </tr>
  );
};

ListItem.propTypes = {
  el: PropTypes.object,
};
