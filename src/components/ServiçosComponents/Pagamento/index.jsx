import style from './pagamento.module.css';
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { IoQrCodeOutline } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";

export default function Pagamento() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Formas de Pagamento</h1>
                    <span>Aceitamos diversos métodos para sua comodidade</span>
                </div>
                <div className={style.formas}>
                    <div className={style.details}>
                        <div className={style.icon}>
                            <CiCreditCard1 />
                        </div>
                        <span>Cartão de Crédito</span>
                        <p>Todas as bandeiras</p>
                    </div>
                    <div className={style.details}>
                        <div className={style.icon}>
                            <FaRegCreditCard />
                        </div>
                        <span>Cartão de Débito</span>
                        <p>Pagamento na hora</p>
                    </div>
                    <div className={style.details}>
                        <div className={style.icon}>
                            <BsCashCoin />
                        </div>
                        <span>Dinheiro</span>
                        <p>Aceitamos e damos troco</p>
                    </div>
                    <div className={style.details}>
                        <div className={style.icon}>
                            <IoQrCodeOutline />
                        </div>
                        <span>PIX</span>
                        <p>Transferência instantânea</p>
                    </div>
                    <div className={style.details}>
                        <div className={style.icon}>
                            <FiSmartphone />
                        </div>
                        <span>Carteiras Digitais
                        </span>
                        <p>Apple Pay, Google Pay</p>
                    </div>
                    <div className={style.details}>
                        <div className={style.icon}>
                            <CiCreditCard1 />
                        </div>
                        <span>Vale Refeição
                        </span>
                        <p>Principais bandeiras</p>
                    </div>
                </div>
            </div>
        </>
    )
}
