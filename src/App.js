import "./assets/css/App.css";

// Importar componentes propios

import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutMe from "./components/AboutMe";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import Habilidades from "./components/Habilidades";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Slider></Slider>

      <AboutMe></AboutMe>

      <Experiencia></Experiencia>

      <Educacion></Educacion>

      <Habilidades></Habilidades>

      <Projects></Projects>

      <Contacts></Contacts>
    </div>
  );
}

export default App;
