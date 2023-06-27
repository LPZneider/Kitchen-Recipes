import "./App.css";
import { ModalProviter } from "./context/ModalContext";
import HeaderRecipe from "./pages/Home/HeaderRecipe/HeaderRecipe";
import { MainRecipe } from "./pages/Home/MainRecipe";

function App() {
  return (
    <>
      <HeaderRecipe />
      <ModalProviter>
        <MainRecipe />
      </ModalProviter>
    </>
  );
}

export default App;
