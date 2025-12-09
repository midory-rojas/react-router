import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(()  => {
        axios.get("https://fakestoreapi.com/products") .then((resp) => {
            console.log(resp)
            setProdotti(resp.data);
            
        });
    },  []);

    return (
        <section className="container py-5 align-items-center">
            <h2 className="text-center">Prodotti</h2>
            <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2">
                {prodotti.map((prodotto) => (
                    <Card key={prodotto.id} prodotto={prodotto} />
                ))}
            </ul>
        </section>
    );
}