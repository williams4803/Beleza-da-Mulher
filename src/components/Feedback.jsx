import "../styles/feedback.css";

function Feedback({ reviews = [] }) {
  return (
    <section className="feedback">

      <h2>O que nossas clientes dizem</h2>

      <div className="feedback-container">

        {reviews.map((r, idx) => (
          <div className="feedback-card" key={idx}>
            <p>{`"${r.mensagem}"`}</p>
            <h4>{r.nome}</h4>
            <small className="feedback-date">
              {new Date(r.createdAt || Date.now()).toLocaleString("pt-BR")}
            </small>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Feedback;