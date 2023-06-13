import "./ListRecipe.scss";
import { useContext } from "react";
import TableContext from "../../context/CrudTableContext";
import { ListItem } from "../ListItem/ListItem";

export const ListRecipe = () => {
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
          <ListItem key={index} el={el} />
        ))}
      </tbody>
    </table>
  );
};
