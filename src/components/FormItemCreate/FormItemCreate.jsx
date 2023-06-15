import { useContext } from "react";
import FormContext from "../../context/FormContext";
import "./FormItemCreate.scss";
import FormItem from "../FormItem/FormItem";

export const FormItemCreate = () => {
  const {
    handleChange,
    forms,
    handleCheckbox,

    handleSubmitForm,
  } = useContext(FormContext);
  return (
    <form onSubmit={handleSubmitForm} className="form-create">
      <legend>New recipe</legend>
      <h3>Recipe name</h3>
      <div>
        <label htmlFor="name">Title*</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder="E.g. Slow cooker beef and rice hot pot"
          name="name"
          value={forms.name}
          onChange={handleChange}
        />
      </div>
      <h3>Ingredients</h3>
      <article className="form-ingredients">
        <ol>
          {forms.ingredients?.map((inpt, index) => (
            <FormItem key={index} inpt={inpt} />
          ))}
        </ol>
      </article>
      <h3>Preparation</h3>
      <div>
        <label htmlFor="preparation">Intructions*</label>
        <input
          type="text"
          id="preparation"
          name="preparation"
          autoComplete="off"
          placeholder="Write the sp eps"
          value={forms.preparation}
          onChange={handleChange}
        />
      </div>
      <h3>Peso</h3>
      <div>
        <label htmlFor="peso">Peso:</label>
        <input
          type="number"
          name="peso"
          id="peso"
          value={forms.peso}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <h3>Reviews</h3>
      <section>
        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews === "1" ? "my-radio-active" : "my-radio"}
            id="1"
            value="1"
            checked={forms.reviews === "1"}
            onChange={handleChange}
          />{" "}
          1
        </label>

        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews === "2" ? "my-radio-active" : "my-radio"}
            id="2"
            value="2"
            checked={forms.reviews === "2"}
            onChange={handleChange}
          />
          2
        </label>

        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews === "3" ? "my-radio-active" : "my-radio"}
            id="3"
            value="3"
            checked={forms.reviews === "3"}
            onChange={handleChange}
          />
          3
        </label>

        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews === "4" ? "my-radio-active" : "my-radio"}
            id="4"
            value="4"
            checked={forms.reviews === "4"}
            onChange={handleChange}
          />
          4
        </label>
      </section>
      <h3>Cooked before</h3>
      <input
        type="checkbox"
        name="cooked"
        checked={forms.cooked}
        onChange={handleCheckbox}
      />

      <input type="submit" value="Create" />
    </form>
  );
};
