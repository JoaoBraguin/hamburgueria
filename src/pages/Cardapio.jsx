import Header from "../components/Header/index.jsx"
import Footer from "../components/Footer/index.jsx"
import style from "./../styles/cardapio2.module.css"
import { FaPlus } from "react-icons/fa6"

import burgerCarneSeca from "../images/burger-carne-seca.jpg"
import baconSupreme from "../images/bacon-supreme.jpg"
import classicBurger from "../images/classic-burger.jpg"
import trufadoPremium from "../images/trufado-premium.jpg"
import bbqMaster from "../images/bbq-master.jpg"
import veggieArtisan from "../images/veggie-artisan.jpg"
import cheddarBaconDeluxe from "../images/cheddar-bacon-deluxe.jpg"
import blueCheeseAngus from "../images/blue-cheese-angus.jpg"
import spicyJalapeno from "../images/spicy-jalapeno.jpg"
import mushroomSwiss from "../images/mushroom-swiss.jpg"
import hawaiianStyle from "../images/hawaiian-style.jpg"
import doubleCheeseLover from "../images/double-cheese-lover.jpg"
import veggieDeluxe from "../images/veggie-deluxe.jpg"
import garlicLover from "../images/garlic-lover.jpg"
import spicyVegan from "../images/spicy-vegan.jpg"

export default function index() {
    const lanches = [
        {
            nome: "Burguer Carne Seca",
            descricao: "Duplo blend, queijo cheddar, alface, tomate e carne seca.",
            preco: "R$ 22,50",
            imagem: burgerCarneSeca,
        },
        {
            nome: "Bacon Supreme",
            descricao: "Hamburguer suculento com bacon crocante e queijo cheddar.",
            preco: "R$ 24,00",
            imagem: baconSupreme,
        },
        {
            nome: "Classic Burger",
            descricao: "Hamburguer clássico com queijo, alface e tomate fresco.",
            preco: "R$ 20,90",
            imagem: classicBurger,
        },
        {
            nome: "Trufado Premium",
            descricao: "Hamburguer gourmet com cogumelos e queijo trufado.",
            preco: "R$ 28,00",
            imagem: trufadoPremium,
        },
        {
            nome: "BBQ Master",
            descricao: "Hamburguer com molho barbecue e anéis de cebola crocantes.",
            preco: "R$ 25,50",
            imagem: bbqMaster,
        },
        {
            nome: "Veggie Artisan",
            descricao: "Hamburguer vegetariano com salada fresca e tomate.",
            preco: "R$ 21,50",
            imagem: veggieArtisan,
        },
        {
            nome: "Cheddar Bacon Deluxe",
            descricao: "Duplo hamburguer com queijo cheddar e bacon crocante.",
            preco: "R$ 26,00",
            imagem: cheddarBaconDeluxe,
        },
        {
            nome: "Blue Cheese Angus",
            descricao: "Hamburguer Angus com queijo azul e rúcula fresca.",
            preco: "R$ 29,00",
            imagem: blueCheeseAngus,
        },
        {
            nome: "Spicy Jalapeño",
            descricao: "Hamburguer apimentado com jalapeños e molho especial.",
            preco: "R$ 24,50",
            imagem: spicyJalapeno,
        },
        {
            nome: "Mushroom Swiss",
            descricao: "Hamburguer com cogumelos salteados e queijo suíço.",
            preco: "R$ 27,00",
            imagem: mushroomSwiss,
        },
        {
            nome: "Hawaiian Style",
            descricao: "Hamburguer com abacaxi grelhado e molho agridoce.",
            preco: "R$ 23,50",
            imagem: hawaiianStyle,
        },
        {
            nome: "Double Cheese Lover",
            descricao: "Hamburguer duplo com muito queijo e bacon.",
            preco: "R$ 27,50",
            imagem: doubleCheeseLover,
        },
        {
            nome: "Veggie Deluxe",
            descricao: "Hamburguer vegetal gourmet com queijo vegano e tomate seco.",
            preco: "R$ 22,90",
            imagem: veggieDeluxe,
        },
        {
            nome: "Garlic Lover",
            descricao: "Hamburguer com alho crocante e rúcula fresca.",
            preco: "R$ 25,00",
            imagem: garlicLover,
        },
        {
            nome: "Spicy Vegan",
            descricao: "Hamburguer vegano apimentado com jalapeños e temperos especiais.",
            preco: "R$ 24,90",
            imagem: spicyVegan,
        },
        {
            nome: "Spicy Vegan",
            descricao: "Hamburguer vegano apimentado com jalapeños e temperos especiais.",
            preco: "R$ 24,90",
            imagem: spicyVegan,
        },
    ]

    return (
        <>
            <Header />
            <div className={`${style.inicio} inicioReveal`}>
                <h1>Cardápio</h1>
                <span>Descubra nossos hambúrgueres épicos, cada um com seu sabor especial.</span>
            </div>
            <div className={style.all}>
                {lanches.map((lanche, index) => (
                    <div key={index} className={style.itens}>
                        <div className={`${style.conteudo} conteudoReveal`}>
                            <div className={style.teste}>
                                <img src={lanche.imagem} alt={lanche.nome} />
                                <div className={style.price}>{lanche.preco}</div>
                            </div>
                            <div className={style.about}>
                                <span>{lanche.nome}</span>
                                <p>{lanche.descricao}</p>
                                <div className={style.botao}>
                                    <FaPlus /> Adicionar
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}
