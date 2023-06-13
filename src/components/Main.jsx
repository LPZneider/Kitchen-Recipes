import "./Main.scss";
import Boton from "./Boton";
import { Form } from "./Form";
import { ListRecipe } from "./ListRecipe";
import { TableProvider } from "../context/CrudTableContext";
import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import { ModalPortal } from "./ModalPortal";

const Main = () => {
  const { modal } = useContext(ModalContext);

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
          {modal && (
            <ModalPortal>
              <h2>formulario</h2>
            </ModalPortal>
          )}
        </TableProvider>
      </article>
    </section>
  );
};

export default Main;
