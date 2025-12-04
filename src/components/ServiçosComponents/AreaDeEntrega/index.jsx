import style from './areaentrega.module.css';
import { FaMapLocationDot } from "react-icons/fa6";

export default function AreaDeEntrega() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Áreas de Entrega</h1>
                    <span>Confira nossa cobertura e tempo de entrega</span>
                </div>
                <div className={style.allzonas}>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.info}>
                            <span>Centro</span>
                            <p>20-30 min</p>
                            <h4>Gratis</h4>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.info}>
                            <span>Centro</span>
                            <p>20-30 min</p>
                            <h4>Gratis</h4>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.info}>
                            <span>Centro</span>
                            <p>20-30 min</p>
                            <h4>Gratis</h4>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.info}>
                            <span>Centro</span>
                            <p>20-30 min</p>
                            <h4>Gratis</h4>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.info}>
                            <span>Centro</span>
                            <p>20-30 min</p>
                            <h4>Gratis</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

