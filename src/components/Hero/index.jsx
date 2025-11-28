import style from './Hero.module.css'
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Hero() {

    useEffect(() => {
        ScrollReveal().reveal('.textReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
        ScrollReveal().reveal('.optionReveal', {
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
            <div className={style.container}>
                <div className={`${style.text} textReveal`}>
                    <h1 className={style.one}>Algar</h1>
                    <h1 className={style.two}>Burguer</h1>
                    <h3>Hamburgueria artesanal com ingredientes frescos, carnes suculentas e receitas exclusivas. Cada hambúrguer é feito com paixão, em um ambiente moderno e acolhedor.</h3>
                </div>
                <div className={`${style.option} optionReveal`}>
                    <div className={style.option1}>
                        <a href="/cardapio">Ver Cardapio</a>
                    </div>
                    <div className={style.option2}>
                        <a href="#">Peça No ifood</a>
                    </div>
                </div>
            </div>

        </>
    )
}