import { useContext } from "react";
import "./FilteringSearch.scss";
import TableContext from "../../../../context/CrudTableContext";
import search from "/src/assets/search.svg";
const FilteringSearch = () => {
  const { handleSubmit } = useContext(TableContext);
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <button>
        <img src={search} alt="🔍" />
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
export default FilteringSearch;
