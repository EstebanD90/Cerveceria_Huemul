import "./Item.css"

const Item = (props) => {
    return (
        <div className={props.name}>
            <h1>{props.name}</h1>
            <h2>Precio: {props.price}</h2>
            <h3>{props.description}</h3>
            <img src={props.image} alt="" />
        </div>

    )
}

export default Item;