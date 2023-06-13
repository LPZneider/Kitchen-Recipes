import { useContext } from "react";
import FormContext from "../../context/FormContext";

export const FormItemCreate = () => {
  const {
    handleChange,
    forms,
    handleCheckbox,
    handleIngredients,
    handleClickIngrendient,
    handleSubmitForm,
  } = useContext(FormContext);
  return (
    <form onSubmit={handleSubmitForm}>
      <legend>New recipe</legend>
      <h3>Recipe name</h3>
      <div>
        <label htmlFor="name">Title*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={forms.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Ingredients</h3>
        <ol>
          {forms.ingredients?.map((inpt) => (
            <li key={inpt.id + 21}>
              <input
                key={inpt.id}
                type="text"
                id={inpt.id}
                name={inpt.id}
                value={inpt.name}
                onChange={(e) => handleIngredients(e, inpt.id)}
              />
              <button
                key={inpt.id + 2}
                value="agregar"
                onClick={handleClickIngrendient}
              >
                +
              </button>
              <button
                key={inpt.id + 69}
                value="eliminar"
                onClick={(e) => handleClickIngrendient(e, inpt.id)}
              >
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
      <h3>Preparation</h3>
      <div>
        <label htmlFor="preparation">Intructions*</label>
        <input
          type="text"
          id="preparation"
          name="preparation"
          placeholder="Write the sp eps"
          value={forms.preparation}
          onChange={handleChange}
        />
      </div>
      <h3>Peso</h3>
      <div>
        <label htmlFor="peso">Peso: 123</label>
        <input
          type="number"
          id="peso"
          name="peso"
          value={forms.peso}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="reviews">Reviews</label>
      <input
        type="radio"
        name="reviews"
        id="1"
        value="1"
        checked={forms.reviews === "1"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="reviews"
        id="2"
        value="2"
        checked={forms.reviews === "2"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="reviews"
        id="3"
        value="3"
        checked={forms.reviews === "3"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="reviews"
        id="4"
        value="4"
        checked={forms.reviews === "4"}
        onChange={handleChange}
      />

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
