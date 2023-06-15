import { useContext } from "react";
import "./FormSearch.scss";
import TableContext from "../../context/CrudTableContext";
export const FormSearch = () => {
  const { handleSubmit } = useContext(TableContext);
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <button>
        <img src="/src/assets/search.svg" alt="🔍" />
      </button>
      <input
        autoComplete="off"
        className="input-search"
        type="text"
        placeholder="Search"
        name="buscar"
      />
    </form>
  );
};
