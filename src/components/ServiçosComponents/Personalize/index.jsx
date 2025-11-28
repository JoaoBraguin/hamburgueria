import style from './personalize.module.css';

export default function Personalize() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Personalize seu Hambúrguer</h1>
                    <span>Monte do seu jeito com nossos ingredientes selecionados</span>
                </div>
                <div className={style.tipos}>
                    <div className={style.tipo}>
                        <h1>Carnes</h1>
                        <ul>
                            <li>Angus 180g</li>
                            <li>Frango Grelhado</li>
                            <li>Vegetariana</li>
                            <li>Dupla Carne</li>
                        </ul>
                    </div>
                    <div className={style.tipo}>
                        <h1>Queijos</h1>
                        <ul>
                            <li>Cheddar</li>
                            <li>Mussarela</li>
                            <li>Gorgonzola</li>
                            <li>Provolone</li>
                            <li>Sem Queijo</li>
                        </ul>
                    </div>
                    <div className={style.tipo}>
                        <h1>Adicionais</h1>
                        <ul>
                            <li>Bacon</li>
                            <li>Ovo</li>
                            <li>Cebola Caramelizada</li>
                            <li>Cogumelos</li>
                            <li>Jalapeño</li>
                        </ul>
                    </div>
                    <div className={style.tipo}>
                        <h1>Molhos</h1>
                        <ul>
                            <li>Barbecue</li>
                            <li>Maionese da Casa</li>
                            <li>Mostarda Dijon</li>
                            <li>Pimenta</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}