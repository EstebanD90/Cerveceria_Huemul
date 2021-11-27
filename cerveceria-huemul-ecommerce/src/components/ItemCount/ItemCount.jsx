<<<<<<< HEAD
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    function Sumar() {
        if (count<stock)
        {
            setCount(count + 1)
        }

    }

    function Restar() {
        if(count>1)
        {
            setCount(count - 1)
        }
    }

    function Agregar() {
        onAdd(count)
        setCount(1)
    }

    return (
        <>
            <section>
                <button onClick={Sumar}>+</button>
                    {count}
                <button onClick={Restar}>-</button>
                <button variant="success" onClick={Agregar}>Agregar al carrito</button>{' '}

            </section>

        </>
    )

} 

=======
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    function Sumar() {
        if (count<stock)
        {
            setCount(count + 1)
        }

    }

    function Restar() {
        if(count>1)
        {
            setCount(count - 1)
        }
    }

    function Agregar() {
        onAdd(count)
        setCount(1)
    }

    return (
        <>
            <section>
                <button onClick={Sumar}>+</button>
                    {count}
                <button onClick={Restar}>-</button>
                <button variant="success" onClick={Agregar}>Agregar al carrito</button>{' '}

            </section>

        </>
    )

} 

>>>>>>> b61aa35dc0318eb20a268b18a842268612648ab0
export default ItemCount;