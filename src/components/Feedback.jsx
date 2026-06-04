import "../styles/feedback.css";

function Feedback({ reviews = [], onDeleteOldest }) {
  const handleDelete = () => {
    if (!onDeleteOldest) return;
    if (reviews.length === 0) return;
    if (window.confirm("Deseja realmente excluir a avaliação mais antiga?")) {
      onDeleteOldest();
    }
  };

  return (
    <section className="feedback">

      <div className="feedback-header">
        <h2>O que nossas clientes dizem</h2>
        <button className="delete-oldest" onClick={handleDelete}>
          Excluir avaliação mais antiga
        </button>
      </div>

      <div className="feedback-container">

        {reviews.length === 0 && <p>Sem avaliações ainda.</p>}

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