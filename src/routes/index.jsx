import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre.jsx";
import Serviço from "../pages/Serviço.jsx";
import Cardapio from "../pages/Cardapio.jsx";
import Time from "../components/Time/index.jsx";
import Contato from "../pages/Contato.jsx";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/sobre" element={< Sobre />} />
                <Route path="/serviço" element={< Serviço />} />
                <Route path="/cardapio" element={< Cardapio />} />
                <Route path="/time" element={< Time />} />
                <Route path="/contato" element={< Contato />} />
            </Routes>
        </BrowserRouter>
    );
}
