import "../styles/ofertas.css";

function Ofertas() {
  return (
    <section id="ofertas" className="ofertas">
      <h2>Ofertas Especiais</h2>
      <div className="oferta-card">
        <h3>50% OFF</h3>
        <p>
          Em produtos selecionados
          nesta semana.
        </p>
        <a href="#produtos" className="oferta-button">Ver Ofertas</a>
      </div>
    </section>
  );
}

export default Ofertas;
