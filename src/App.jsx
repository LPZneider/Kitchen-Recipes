import "./App.css";
import { Main } from "./components/Main";
import { HeaderRecipe } from "./components/Header";
import { ModalProviter } from "./context/ModalContext";

function App() {
  return (
    <>
      <HeaderRecipe />
      <ModalProviter>
        <Main />
      </ModalProviter>
    </>
  );
}

export default App;
