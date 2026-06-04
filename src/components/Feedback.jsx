import "../styles/feedback.css";

function Feedback() {
  return (
    <section className="feedback">

      <h2>O que nossas clientes dizem</h2>

      <div className="feedback-container">

        <div className="feedback-card">
          <p>
            "Produtos maravilhosos e entrega super rápida.
            Com certeza comprarei novamente."
          </p>
          <h4>Ana Souza</h4>
        </div>

        <div className="feedback-card">
          <p>
            "A qualidade dos produtos superou minhas expectativas.
            Atendimento excelente."
          </p>
          <h4>Juliana Lima</h4>
        </div>

        <div className="feedback-card">
          <p>
            "Site bonito, fácil de usar e produtos incríveis."
          </p>
          <h4>Camila Oliveira</h4>
        </div>

      </div>

    </section>
  );
}

export default Feedback;