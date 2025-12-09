export default function Card({ prodotto }) {
    const { image, category, description, title, price } = prodotto;
    return (
        <div className="col">
            <div className="card d-flex justify-content-center">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
