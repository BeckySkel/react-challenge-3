import css from "./App.module.css";
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm.js"
import Content from "./components/Content";
import ContentAPI from "./components/ContentAPI";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      {/* <NavBarSimple /> */}
      <Sidebar />
      <ContentAPI />
    </div>
  );
}

export default App;