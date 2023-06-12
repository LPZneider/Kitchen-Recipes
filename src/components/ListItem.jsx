import PropTypes from "prop-types";

export const ListItem = ({ el: { name, reviews, cooked, peso } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{reviews}</td>
      <td>{cooked}</td>
      <td>{peso}</td>
    </tr>
  );
};

ListItem.propTypes = {
  el: PropTypes.object,
};
