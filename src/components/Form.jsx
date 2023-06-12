import { FormSearch } from "./FormSearch";
import { FormSelect } from "./FormSelect";
import "./Form.scss";
export const Form = () => {
  return (
    <section className="form-main">
      <FormSearch />
      <FormSelect />
    </section>
  );
};
