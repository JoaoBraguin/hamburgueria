import Header from "../components/Header";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Time from "../components/Time";
import Cardapio from "../components/Cardapio";
import Localizacao from "../components/Localizacao";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Sobre />
            <Time />
            <Cardapio />
            <Localizacao />
            <Footer />
        </>
    )
}