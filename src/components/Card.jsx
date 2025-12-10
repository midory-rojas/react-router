export default function Card({ prodotto }) {
    const { image, category, description, title, price } = prodotto;
    return (
        <div className="card h-100">
            <img src={image} className="card-img" alt={title} height={250}/>
            <div className="card-body">
                <h5>{title}</h5>
            </div>
            <a href="">Vedi dettagli</a>
        </div>

    )
}
