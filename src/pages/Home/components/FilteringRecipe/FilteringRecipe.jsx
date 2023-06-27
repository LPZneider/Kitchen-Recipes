import { FilteringSearch } from "../FilteringSearch/";
import { FilteringSelect } from "../FilteringSelect/";
import "./FilteringRecipe.scss";
const FilteringRecipe = () => {
  return (
    <section className="form-main">
      <FilteringSearch />
      <FilteringSelect />
    </section>
  );
};
export default FilteringRecipe;
