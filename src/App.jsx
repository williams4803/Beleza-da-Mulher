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

function App() {
  const [reviews, setReviews] = useState([
    {
      nome: "Ana Souza",
      mensagem:
        "Produtos maravilhosos e entrega super rápida. Com certeza comprarei novamente.",
      createdAt: new Date().toISOString(),
    },
    {
      nome: "Juliana Lima",
      mensagem:
        "A qualidade dos produtos superou minhas expectativas. Atendimento excelente.",
      createdAt: new Date().toISOString(),
    },
    {
      nome: "Camila Oliveira",
      mensagem: "Site bonito, fácil de usar e produtos incríveis.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const handleAddReview = (review) => {
    const reviewWithDate = {
      ...review,
      createdAt: review.createdAt || new Date().toISOString(),
    };

    setReviews((prev) => [reviewWithDate, ...prev]);
  };

  const handleDeleteOldest = () => {
    setReviews((prev) => {
      if (!prev || prev.length === 0) return prev;
      return prev.slice(0, prev.length - 1);
    });
  };
  return (
    <>
      <Header />
      <Hero />
      <Produtos />
       <Sobre />
      <Ofertas />
      <Feedback reviews={reviews} onDeleteOldest={handleDeleteOldest} />
      <Avaliacao onAddReview={handleAddReview} />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
