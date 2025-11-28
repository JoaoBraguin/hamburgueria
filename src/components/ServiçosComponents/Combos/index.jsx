import style from './combos.module.css';
import { FaCheckCircle } from "react-icons/fa";

export default function ServiçosCombosComponents() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Nossos Combos</h1>
                    <span>Economize com nossas ofertas especiais</span>
                </div>
                <div className={style.combocards}>
                    <div className={style.card}>
                        <h1>Combo Individual</h1>
                        <ul>
                            <li> <FaCheckCircle />1 Hamburguer</li>
                            <li> <FaCheckCircle />Batata Frita</li>
                            <li><FaCheckCircle />Refrigerante</li>
                            <h2>R$ 35,90</h2>
                            <div className={style.botao}>
                                <button>Pedir Agora</button>
                            </div>
                        </ul>
                    </div>
                    <div className={style.card2}>
                        <h1>Combo Duplo</h1>
                        <div className={style.most}>
                            Mais Popular
                        </div>
                        <ul>
                            <li> <FaCheckCircle />2 Hambúrgueres</li>
                            <li> <FaCheckCircle />Batata Frita Grande</li>
                            <li><FaCheckCircle />2 Refrigerantes</li>
                            <h2>R$ 65,90</h2>
                              <div className={style.botao}>
                                <button>Pedir Agora</button>
                            </div>
                        </ul>
                    </div>
                    <div className={style.card}>
                        <h1>Combo Família</h1>
                        <ul>
                            <li> <FaCheckCircle />4 Hambúrgueres</li>
                            <li> <FaCheckCircle />2 Batatas Fritas</li>
                            <li><FaCheckCircle />4 Bebidas</li>
                            <h2>R$ 120,00</h2>
                              <div className={style.botao}>
                                <button>Pedir Agora</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}