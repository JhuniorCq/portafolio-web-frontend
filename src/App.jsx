import "./App.css";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Technologies } from "./pages/Technologies/Technologies";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
