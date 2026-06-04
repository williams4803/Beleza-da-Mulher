import "../styles/header.css";

function Header() {
  return (
    <header className="header">

      <h1>Loja de Beleza</h1>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#sobre">Sobre Mim</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#contato">Contato</a>
      </nav>

    </header>
  );
}

export default Header;
