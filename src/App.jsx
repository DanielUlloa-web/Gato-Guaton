import "./App.css";
import Descripcion from "./components/Descripcion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nombre from "./components/Nombre";

function App() {
  return (
    <div className="App">
      <Header />
      <Nombre />
      <Descripcion />
      <Footer />
    </div>
  );
}

export default App;
