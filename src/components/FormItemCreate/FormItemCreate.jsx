export const FormItemCreate = () => {
  return (
    <form>
      <legend>New recipe</legend>
      <h3>Recipe name</h3>
      <div>
        <label htmlFor="title">Title*</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <h3>Ingredients</h3>
        <ol>
          <li>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Type ingredient"
            />
          </li>
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
        />
      </div>
      <h3>Peso</h3>
      <div>
        <label htmlFor="peso">Peso: 123</label>
        <input type="text" id="peso" name="peso" />
      </div>
      <label htmlFor="reviews"></label>
      <input type="radio" name="reviews" id="1" value="1" />
      <input type="radio" name="reviews" id="2" value="2" />
      <input type="radio" name="reviews" id="3" value="3" />
      <input type="radio" name="reviews" id="4" value="4" />

      <h3>Cooked before</h3>
      <input type="checkbox" />

      <input type="submit" value="Create" />
    </form>
  );
};
