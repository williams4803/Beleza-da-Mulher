import "../styles/feedback.css";

function Feedback({ reviews = [], onDeleteOldest, onDeleteReview }) {
  const handleDeleteOldest = () => {
    if (!onDeleteOldest) return;
    if (reviews.length === 0) return;
    if (window.confirm("Deseja realmente excluir a avaliação mais antiga?")) {
      onDeleteOldest();
    }
  };

  const handleDeleteCard = (id) => {
    if (!onDeleteReview) return;
    if (window.confirm("Deseja realmente excluir esta avaliação?")) {
      onDeleteReview(id);
    }
  };

  return (
    <section className="feedback">

      <div className="feedback-header">
        <h2>O que nossas clientes dizem</h2>
        <button className="delete-oldest" onClick={handleDeleteOldest}>
          Excluir avaliação mais antiga
        </button>
      </div>

      <div className="feedback-container">

        {reviews.length === 0 && <p>Sem avaliações ainda.</p>}

        {reviews.map((r) => (
          <div className="feedback-card" key={r.createdAt}>
            <button className="delete-card" onClick={() => handleDeleteCard(r.createdAt)}>
              ✕
            </button>
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