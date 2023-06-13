import { FormSearch } from "../FormSearch/FormSearch";
import { FormSelect } from "../FormSelect/FormSelect";
import "./Form.scss";
export const Form = () => {
  return (
    <section className="form-main">
      <FormSearch />
      <FormSelect />
    </section>
  );
};
