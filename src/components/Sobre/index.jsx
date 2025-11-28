import { useEffect } from "react";
import style from "./Sobre.module.css"
import ScrollReveal from "scrollreveal";




export default function Sobre() {

    useEffect(() => {
        ScrollReveal().reveal('.esqReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
         ScrollReveal().reveal('.infoReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
         ScrollReveal().reveal('.infoespecialReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
         ScrollReveal().reveal('.dirReveal', {
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
            <section className={style.container}>
                <div className={style.esq}>
                    <div className={`${style.text} esqReveal`}>
                        <h1>Algar</h1>
                        <h3>Mais que uma hamburgueria, é um ponto de encontro para quem aprecia boa comida e bons momentos. Com um ambiente moderno, aconchegante e cheio de personalidade, o Algar foi criado para oferecer uma experiência completa, onde cada detalhe do atendimento ao clima do espaço, torna sua visita única e especial.</h3>
                        <h3>O lugar ideal para quem busca sabor de verdade. Hambúrgueres artesanais, ingredientes selecionados e aquele toque especial que transforma cada mordida em uma experiência inesquecível.</h3>
                    </div>
                    <div className={style.infos}>
                        <div className={`${style.info} infoReveal`}>
                            <h1>100%</h1>
                            <span>Carne Artesanal</span>
                        </div>
                        <div className={`${style.infoespecial} infoespecialReveal`}>
                            <h1>9</h1>
                            <span>Hamburgueres Especiais</span>
                        </div>
                        <div className={`${style.info} infoReveal`}>
                            <h1>24h</h1>
                            <span>Preparo Artesanal</span>
                        </div>
                        <div className={`${style.info} infoReveal`}>
                            <h1>20+</h1>
                            <span>Sabores infinitos</span>
                        </div>
                    </div>
                </div>
                <div className={`${style.dir} dirReveal`}>
                    <img src="https://conteudo.imguol.com.br/c/noticias/f6/2022/07/21/hellmanns-escolhe-sao-paulo-para-lancar-sua-primeira-hamburgueria-1658432069335_v2_4x3.jpg" alt="" />
                </div>
            </section>

        </>
    )
}