import "../styles/hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-content">

        <h2>Elegância e Beleza</h2>

        <p>
          Produtos premium para maquiagem,
          skincare e autoestima feminina.
        </p>

        <div className="hero-buttons">
          <a className="hero-button" href="/checkout.html">Comprar Agora</a>
          <a className="hero-button hero-button-secondary" href="#produtos">Ver Catálogo</a>
        </div>

      </div>

    </section>
  );
}

export default Hero;
