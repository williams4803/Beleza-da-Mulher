import { useState } from "react";
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

const generateId = () => `${Math.random().toString(36).slice(2)}`;

const initialReviews = [
  {
    nome: "Ana Souza",
    mensagem:
      "Produtos maravilhosos e entrega super rápida. Com certeza comprarei novamente.",
    createdAt: new Date().toISOString(),
    id: generateId(),
  },
  {
    nome: "Juliana Lima",
    mensagem:
      "A qualidade dos produtos superou minhas expectativas. Atendimento excelente.",
    createdAt: new Date().toISOString(),
    id: generateId(),
  },
  {
    nome: "Camila Oliveira",
    mensagem: "Site bonito, fácil de usar e produtos incríveis.",
    createdAt: new Date().toISOString(),
    id: generateId(),
  },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);

  const handleAddReview = (review) => {
    const reviewWithDate = {
      ...review,
      createdAt: review.createdAt || new Date().toISOString(),
      id: review.id || generateId(),
    };

    setReviews((prev) => [reviewWithDate, ...prev]);
  };

  const handleDeleteOldest = () => {
    setReviews((prev) => {
      if (!prev || prev.length === 0) return prev;
      return prev.slice(0, prev.length - 1);
    });
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };
  return (
    <>
      <Header />
      <Hero />
      <Produtos />
       <Sobre />
      <Ofertas />
      <Feedback reviews={reviews} onDeleteOldest={handleDeleteOldest} onDeleteReview={handleDeleteReview} />
      <Avaliacao onAddReview={handleAddReview} />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
