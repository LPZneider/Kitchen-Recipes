import { useContext } from "react";
import FormContext from "../../../../context/FormContext";
import "./FormItemCreate.scss";
import { BotonActive } from "../../../../models/BotonActive";
import FormItem from "../FormItem/FormItem";

export const FormItemCreate = () => {
  const {
    handleChange,
    forms,
    handleCheckbox,
    handleSubmitForm,
    handleValidations,
    validations,
  } = useContext(FormContext);

  return (
    <form onSubmit={handleSubmitForm} className="form-create">
      <legend> {forms.id ? "Update" : "New"} recipe</legend>
      <h3>Recipe name</h3>
      <div className="div-input">
        <label htmlFor="name">Title*</label>
        <input
          required
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          type="text"
          id="name"
          autoComplete="off"
          placeholder="E.g. Slow cooker beef and rice hot pot"
          name="name"
          value={forms.name}
          onChange={handleChange}
        />
        {forms.name === "" && validations ? (
          <p className="warning"> Name required</p>
        ) : null}
      </div>
      <h3>Ingredients</h3>
      <article className="form-ingredients">
        <ol>
          {forms.ingredients?.map((inpt, index) => (
            <FormItem key={index} inpt={inpt} cant={index} />
          ))}
        </ol>
      </article>
      <h3>Preparation</h3>
      <div className="div-input textarea-recipe">
        <label htmlFor="preparation">Intructions*</label>
        <textarea
          title="Your comment must be longer than 20 characters but not exceed 255 characters"
          required
          id="preparation"
          name="preparation"
          autoComplete="off"
          placeholder="Write the sp eps"
          value={forms.preparation}
          className="preparation"
          onChange={handleChange}
        />
        {forms.preparation === "" && validations ? (
          <p className="warning">Instructions required</p>
        ) : forms.preparation.length < 20 && validations ? (
          <p className="warning">Minimum 20 characters</p>
        ) : null}
      </div>
      <h3>Peso</h3>
      <div className="div-input">
        <label htmlFor="peso">Peso:</label>
        <input
          required
          type="number"
          title="This field is required"
          name="peso"
          id="peso"
          value={forms.peso}
          autoComplete="off"
          onChange={handleChange}
        />
        {forms.peso === "" && validations ? (
          <p className="warning">Peso required</p>
        ) : null}
      </div>
      <h3>Reviews</h3>
      <section className="radios-btn">
        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews == 1 ? "my-radio-active" : "my-radio"}
            id="1"
            value={1}
            checked={forms.reviews == 1}
            onChange={handleChange}
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews == 2 ? "my-radio-active" : "my-radio"}
            id="2"
            value={2}
            checked={forms.reviews == 2}
            onChange={handleChange}
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews == 3 ? "my-radio-active" : "my-radio"}
            id="3"
            value={3}
            checked={forms.reviews == 3}
            onChange={handleChange}
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="reviews"
            className={forms.reviews == 4 ? "my-radio-active" : "my-radio"}
            id="4"
            value={4}
            checked={forms.reviews == 4}
            onChange={handleChange}
          />
          4
        </label>
      </section>
      {!forms.reviews && validations ? (
        <p className="warning">Reviews required</p>
      ) : null}
      <h3 className="cooked">Cooked before</h3>

      <BotonActive
        funActive={handleCheckbox}
        isChecked={forms.cooked}
        idElement={forms.id}
      />
      <div className="div-submit">
        <input
          type="submit"
          name="enviar"
          value={forms.id ? "Update" : "Create"}
          onClick={handleValidations}
        />
      </div>
    </form>
  );
};
