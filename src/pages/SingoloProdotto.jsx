import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProdottoSection from "../components/ProdottoSection";

export default function SingoloProdotto() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState(null);


    console.log('Singolo prodotto');


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            console.log(resp);
            setProdotto(resp.data);
        });
    }, [id]);

    return (
        <section>
            {prodotto !== null &&
                <ProdottoSection prodotto={prodotto} />}
        </section>

    )

}