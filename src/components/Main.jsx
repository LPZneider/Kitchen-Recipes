import "./Main.scss";
import Boton from "./Boton";
import { Form } from "./Form";
import { ListRecipe } from "./ListRecipe";
import { TableProvider } from "../context/CrudTableContext";
const Main = () => {
  return (
    <section className="main-recipes">
      <article className="img-container">
        <div className="img-recipes"></div>
      </article>
      <article className="form-recipes">
        <h1>Kitchen Recipes</h1>
        <TableProvider>
          <Form />
          <ListRecipe />
          <Boton />
        </TableProvider>
      </article>
    </section>
  );
};

export default Main;
