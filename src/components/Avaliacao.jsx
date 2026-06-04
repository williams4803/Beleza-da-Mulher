import { useState } from "react";
import "../styles/avaliação.css";

function Avaliacao({ onAddReview }) {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarAvaliacao = (e) => {
    e.preventDefault();

    const nova = { nome: nome || "Anônimo", mensagem };
    if (typeof onAddReview === "function") {
      onAddReview(nova);
    }

    alert("Obrigado pela sua avaliação!");

    setNome("");
    setMensagem("");
  };

  return (
    <section className="avaliacao">

      <h2>Deixe sua Avaliação</h2>

      <p>
        Conte para nós como foi sua experiência com nossa loja e produtos.
      </p>

      <form onSubmit={enviarAvaliacao}>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <textarea
          placeholder="Escreva sua opinião"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button type="submit">
          Enviar Avaliação
        </button>

      </form>

    </section>
  );
}

export default Avaliacao;