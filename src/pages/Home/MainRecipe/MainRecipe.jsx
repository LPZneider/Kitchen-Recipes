import "./MainRecipe.scss";
import { FormProviter } from "../../../context/FormContext";
import { TableProvider } from "../../../context/CrudTableContext";
import { useContext } from "react";
import FilteringRecipe from "../components/FilteringRecipe/FilteringRecipe";
import ModalContext from "../../../context/ModalContext";
import TableRecipe from "../components/TableRecipe/TableRecipe";
import ButtonAddRecipe from "../ButtonAddRecipe/ButtonAddRecipe";
import { ModalPortal } from "../../Modal/ModalPortal/ModalPortal";
import { FormItemCreate } from "../../Modal/components/FormItemCreate/FormItemCreate";

const MainRecipe = () => {
  const { modal } = useContext(ModalContext);

  return (
    <section className="main-recipes">
      <article className="img-container">
        <div className="img-recipes"></div>
      </article>
      <article className="form-recipes">
        <h1>Kitchen Recipes</h1>

        <TableProvider>
          <FormProviter>
            <FilteringRecipe />
            <TableRecipe />
            <ButtonAddRecipe />
            {modal && (
              <ModalPortal isForm={true}>
                <FormItemCreate />
              </ModalPortal>
            )}
          </FormProviter>
        </TableProvider>
      </article>
    </section>
  );
};

export default MainRecipe;
