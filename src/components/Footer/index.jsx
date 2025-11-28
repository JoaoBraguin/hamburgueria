import style from "./Footer.module.css";
import { FaBurger, FaPhone, FaEnvelope, FaCartShopping } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                {/* Seção 1 - Logo e Descrição */}
                <div className={style.section}>
                    <div className={style.logo}>
                        <div className={style.iconBox}>
                            <FaBurger />
                        </div>
                        <span>ALGAR</span>
                    </div>
                    <p>
                        Lanches artesanais com ingredientes selecionados e muito sabor.
                    </p>
                </div>

                {/* Seção 2 - Contato */}
                <div className={style.section}>
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <GrLocation /> Rua das Delícias, 123 - Centro
                        </li>
                        <li>
                            <FaPhone /> (11) 9999-9999
                        </li>
                        <li>
                            <FaEnvelope /> contato@algar.com.br
                        </li>
                    </ul>
                </div>

                {/* Seção 3 - Horário */}
                <div className={style.section}>
                    <h3>Horário</h3>
                    <ul>
                        <li>
                            <FaRegClock /> Segunda a Sexta: 18h - 23h
                        </li>
                        <li className={style.subitem}>Sábado e Domingo: 17h - 00h</li>
                        <li>
                            <FaCartShopping className={style.orangeIcon} />{" "}
                            <span className={style.highlight}>Delivery disponível</span>
                        </li>
                    </ul>
                </div>
            </footer>

            <div className={style.bottom}>
                © 2025 ALGAR - Todos os direitos reservados
            </div>
        </>
    );
}
