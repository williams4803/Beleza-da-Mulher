import kitMaquiagem from "../assets/kit-maquiagem.jpeg";
import perfumePremium from "../assets/perfume-premium.jpeg";
import skincare from "../assets/skincare.jpeg";
import "../styles/produtos.css";

function Produtos() {
  return (
    <section id="produtos" className="produtos">

      <h2>Produtos em Destaque</h2>

      <div className="cards">

        <div className="card">
          <img src={kitMaquiagem} alt="Kit Maquiagem" />
          <h3>Kit Maquiagem</h3>
          <p>R$ 89,90</p>
        </div>

        <div className="card">
          <img src={perfumePremium} alt="Perfume Premium" />
          <h3>Perfume Premium</h3>
          <p>R$ 129,90</p>
        </div>

        <div className="card">
          <img src={skincare} alt="Skincare" />
          <h3>Skincare</h3>
          <p>R$ 149,90</p>
        </div>

      </div>

    </section>
  );
}

export default Produtos;
