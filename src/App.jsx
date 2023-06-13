import "./App.css";
import Main from "./components/Main";
import HeaderRecipe from "./components/header";
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
