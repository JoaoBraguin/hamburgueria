import style from './Localizacao.module.css';
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Localizacao() {

    useEffect(() => {
        ScrollReveal().reveal('.findReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
        ScrollReveal().reveal('.locationReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
    }, [])
    return (
        <>
            <div className={`${style.find} findReveal`}>
                <h1>Encontre <span>Algar</span></h1>
                <div className={style.descricao}>
                    <p>Venha conhecer nossa Hamburgueria ou peça delivery. Os portões da Algar estão sempre abertos para você.</p>
                </div>
            </div>
            <div className={`${style.location} locationReveal`}>
                <div className={style.infos}>
                    <div className={style.icon}>
                        <GrLocation />
                    </div>
                    <h1>Algar Burguer</h1>
                    <p>Jarim Alvorada. Volta Redonda - JB</p>
                    <div className={style.botao}>
                        <a href="https://www.google.com/maps/place//@38.6197691,-9.1184507,21z?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D">Ver no Google Maps </a>
                    </div>
                </div>
            </div>

        </>
    )
}