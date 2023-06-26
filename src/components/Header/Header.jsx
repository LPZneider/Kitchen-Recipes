import "./Header.scss";
import recipe from "/src/assets/recipe.svg";
const HeaderRecipe = () => {
  return (
    <header className="header-recipes">
      <a href="#">
        <img src={recipe} alt="recipe logo" />
      </a>
    </header>
  );
};

export default HeaderRecipe;
