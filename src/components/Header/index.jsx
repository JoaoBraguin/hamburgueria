import style from "./Header.module.css";
import { PiHamburger } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <header className={style.container}>
        <div className={style.logo}>
          <div className={style.iconBox}>
            <PiHamburger />
          </div>
          <h1>ALGAR</h1>
        </div>
        <nav className={style.nav}>
          <a href="/">HOME</a>
          <a href="/sobre">SOBRE</a>
          <a href="/serviço">SERVIÇO</a>
          <a href="/cardapio">CARDÁPIO</a>
          <a href="/time">TIME</a>
          <a href="/contato">CONTATO</a>
        </nav>
        <div className={style.pedido}>
          <FaCartShopping />
          <span>Pedido</span>
        </div>
      </header>
    </>
  );
}
