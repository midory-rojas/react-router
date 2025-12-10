import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProdottoSection from "../components/ProdottoSection";


export default function SingoloProdotto() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState(null);
    const navigate = useNavigate();





    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            //console.log(resp);
            if (!resp.data || resp.data.length === 0) {
                navigate("/prodotti");
            } else {
                setProdotto(resp.data);
            }
        })
            .catch((err) => {
                console.log("Errore API", err);
                navigate("/prodotti");
            });
    }, [id]);

    return (
        <section>
            <button onClick={() => navigate(-1)}>
                Ritorna nella pagina precedente
            </button>
            {prodotto !== null &&
                <ProdottoSection prodotto={prodotto} />}
        </section>

    )

}