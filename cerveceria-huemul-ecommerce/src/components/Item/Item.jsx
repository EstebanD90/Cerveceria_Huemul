import "./Item.css"
import ItemCount from "../ItemCount/ItemCount";

const Item = ({name, price, description, imgUrl}) => {

    function onAdd(cant) {
        console.log(cant)
    }


    return (
        <><div className={name}>
            <h1>{name}</h1>
            <h2>Precio: ${price}</h2>
            <h3>{description}</h3>
            <img src={imgUrl} style={{ width: 300, height: 350, marginLeft: 10, marginRight: 10 ,paddingBottom: 10}} alt="" />

                <div className="count">
                <ItemCount initial={1} stock={10} onAdd={onAdd} style={{ width: 300, height: 300, marginLeft: 10, marginRight: 10 }}/>
                </div>
        </div>
        </>

    )
}

export default Item;