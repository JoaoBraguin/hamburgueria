import style from './estiver.module.css';
import { FiSmartphone } from "react-icons/fi";

export default function PeçaOndeEstiver() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Peça de Onde Estiver</h1>
                    <span>Disponível em várias plataformasos</span>
                </div>
                <div className={style.Allplataformas}>
                    <div className={style.plataformas}>
                        <FiSmartphone /><span>Ifood</span>
                    </div>
                    <div className={style.plataformas}>
                        <FiSmartphone /><span>Rappi</span>
                    </div>
                    <div className={style.plataformas}>
                        <FiSmartphone /><span>Uber Eats</span>
                    </div>
                    <div className={style.plataformas}>
                        <FiSmartphone /><span>App ALGAR</span>
                    </div>
                    <div className={style.plataformas}>
                        <FiSmartphone /><span>WhatsApp</span>
                    </div>
                    <div className={style.plataformas}>
                        <FiSmartphone /><span>Site Próprio</span>
                    </div>
                </div>
            </div>
        </>
    )
}