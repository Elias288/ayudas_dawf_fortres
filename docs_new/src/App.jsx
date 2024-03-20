import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import SideNav from "./components/sideNav/SideNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import ComandosStonesense from "./pages/ComandosStonesense.jsx";
import Guias from "./pages/guias/Guias.jsx";
import ScrollToAnchor from "./components/ScrollToAnchor.jsx";
import Comandos from "./pages/Comandos.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SideNav />

      <main>
        <div className="content">
          <ScrollToAnchor />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/commands" element={<Comandos />} />
            <Route
              path="/commandsStonesense"
              element={<ComandosStonesense />}
            />
            <Route path="/guides" element={<Guias />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
