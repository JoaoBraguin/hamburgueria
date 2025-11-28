import style from "./Time.module.css";
import chef1 from "../../images/chef1.jpg"
import chef3 from "../../images/chef3.jpg"
import chef4 from "../../images/chef4.jpg"
import chef6 from "../../images/chef6.jpg"
import { useEffect } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollReveal from 'scrollreveal';

export default function Time() {

    useEffect(() => {
        ScrollReveal().reveal('.inicioReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
        ScrollReveal().reveal('.oneReveal', {
            delay: 300,
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
            <div className={`${style.inicio} inicioReveal`}>
                <h1>Nossa Equipe De Chefs</h1>
                <h2>Conheça nossos melhores chefs!</h2>
            </div>
            <div className={style.team}>
                <div className={`${style.one} oneReveal`}>
                    <img src={chef1} alt="" />
                    <div className={style.about}>
                        <span>Rodrigo Paiva</span>
                        <p>Consultor & Chef</p>
                        <div className={style.icons}>
                            <IoLogoInstagram />
                            <FaFacebookF />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <div className={`${style.one} oneReveal`}>
                    <img src={chef6} alt="" />
                    <div className={style.about}>
                        <span>Rafael Monteiro</span>
                        <p>Design & Chef</p>
                        <div className={style.icons}>
                            <IoLogoInstagram />
                            <FaFacebookF />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <div className={`${style.one} oneReveal`}>
                    <img src={chef3} alt="" />
                    <div className={style.about}>
                        <span>Felipe Moura</span>
                        <p>Fundador & Chef Executivo</p>
                        <div className={style.icons}>
                            <IoLogoInstagram />
                            <FaFacebookF />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <div className={`${style.one} oneReveal`}>
                    <img src={chef4} alt="" />
                    <div className={style.about}>
                        <span>Tiago Figueira</span>
                        <p>CEO & Chef</p>
                        <div className={style.icons}>
                            <IoLogoInstagram />
                            <FaFacebookF />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}