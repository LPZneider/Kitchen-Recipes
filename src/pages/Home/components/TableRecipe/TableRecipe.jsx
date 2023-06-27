import "./TableRecipe.scss";
import { useContext } from "react";
import TableItem from "../TableItem/TableItem";
import TableContext from "../../../../context/CrudTableContext";

const TableRecipe = () => {
  const { table } = useContext(TableContext);

  return (
    <table>
      <thead>
        <tr>
          <td>Recipe name</td>
          <td>Reviews</td>
          <td>Cooked before</td>
          <td>Peso</td>
        </tr>
      </thead>
      <tbody>
        {table.map((el, index) => (
          <TableItem key={index} el={el} />
        ))}
      </tbody>
    </table>
  );
};
export default TableRecipe;
