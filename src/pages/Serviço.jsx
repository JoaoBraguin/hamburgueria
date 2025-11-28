
import { FaRegClock } from "react-icons/fa6";
import style from '../styles/serviço.module.css'
import Header from "../components/Header/index.jsx"
import Footer from "../components/Footer/index.jsx"
import Combos from "../components/ServiçosComponents/Combos/index.jsx"
import { FaStore } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import Personalize from "../components/ServiçosComponents/Personalize/index.jsx";
import Pagamento from "../components/ServiçosComponents/Pagamento/index.jsx";
import PeçaOndeEstiver from "../components/ServiçosComponents/PeçaOndeEstiver/index.jsx";



export default function Serviço() {
    return (
        <>
            <Header />
            <div className={style.container2}>
                <div className={style.inicio}>
                    <h1>Nossos Serviços</h1>
                    <span>No Algar, oferecemos mais que hambúrgueres artesanais. Proporcionamos experiências únicas com serviços pensados para o seu conforto e praticidade.</span>
                </div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaStore />
                        </div>
                        <span>Atendimento Presencial</span>
                        <p>Visite nosso restaurante e desfrute de um ambiente moderno e acolhedor.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <RiShoppingBag3Fill />
                        </div>
                        <span>Pedido para Viagem</span>
                        <p>Retire seu pedido no balcão de forma rápida e prática.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaTruck />
                        </div>
                        <span>Delivery</span>
                        <p>Receba nossos hambúrgueres artesanais no conforto da sua casa.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaUsers />
                        </div>
                        <span>Eventos e Festas</span>
                        <p>Cardápio personalizado para seus eventos especiais.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaRegClock />
                        </div>
                        <span>Horário Estendido</span>
                        <p>Aberto até tarde para você matar aquela fome a qualquer hora.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaUtensils />
                        </div>
                        <span>Cardápio Personalizado</span>
                        <p>Monte seu hambúrguer do seu jeito com ingredientes selecionados.</p>
                    </div>
                </div>
            </div>
            <Combos />
            <Personalize />
            <Pagamento />
            <PeçaOndeEstiver />
            <Footer />
        </>
    )

}