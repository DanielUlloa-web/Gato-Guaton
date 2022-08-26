import "./App.css";
import Descripcion from "./components/Descripcion";
import Header from "./components/Header";
import Nombre from "./components/Nombre";

function App() {
  return (
    <div className="App">
      <Header />
      <Nombre />
      <Descripcion />
    </div>
  );
}

export default App;
