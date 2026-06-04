import Header from "./components/Header";
import Hero from "./components/Hero";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import Ofertas from "./components/Ofertas";
import Feedback from "./components/Feedback";
import Avaliacao from "./components/Avaliacao";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";

import "./styles/global.css";
import "./styles/responsive.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Produtos />
       <Sobre />
      <Ofertas />
      <Feedback />
      <Avaliacao />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
