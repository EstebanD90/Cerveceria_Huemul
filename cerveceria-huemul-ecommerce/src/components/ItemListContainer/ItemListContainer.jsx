import Item from "../Item/Item";
import "./ItemListContainer.css";

import {items} from '../data/getFetch';

//import { useState, useEffect } from 'react';

//import { getFetch } from './components/data/getFetch';


//import ItemCount from "../ItemCount/ItemCount";



/*
const ItemListContainer = () => {
        const [string, setString] = useState('')
        
        function mostrarDiv() {
            setString('prueba de mensaje que ingreso al Div')
        }   
        

        function onAdd(cant) {
            console.log(cant)
        }
        


        return (
            <div>
                <div>
                    {string !== '' && <label>{string}</label>}
                </div>

                <button onClick={mostrarDiv}> Mensaje de DIV </button>

                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>
        )

}
*/


/*

export function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    //const [bool, setBool] = useState(true)
  
    useEffect(()=> {
        getFetch
        .then(data => {
          console.log('llamada api')
          setProducts(data)
        })
  
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
  
        return() => {
          console.log('clean')
        }
  
    },[]) 
  
    console.log('antes del rendering')
    console.log(products)
  

    function onAdd(cant) {
        console.log(cant)
    }
    

    return (
        <div className="item-list-container">
            { loading ? <h1>Cargando productos..</h1> : products.map((item) => (
                        <><Item name={item.name} price={item.price} imgUrl={item.imgUrl} />
                        <ItemCount initial={1} stock={10} onAdd={onAdd} /></>
                    ))}
            
            <Item name="cerveza golden" price ="220" description="Golden" imgUrl={golden}/>
            <Item name="cerveza red scottish" price ="250" description="Irish Red" imgUrl={red_irish}/>
            <Item name="cerveza ipa" price ="270" description="IPA" imgUrl={ipa}/>
            <Item name="cerveza porter" price ="260" description="Porter" imgUrl={porter}/>
            <Item name="cerveza apa" price ="260" description="APA" imgUrl={apa}/>
            <Item name="cerveza stout" price ="280" description="Stout" imgUrl={stout}/>

<ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    );
}    

*/

export function ItemListContainer({greeting}) {


    return (
        <><h1 className="greeting">{greeting}</h1>
        <div className="item-list-container">


            {items.map((item) => (
                <Item name={item.name} price={item.price} description={item.description} imgUrl={item.imgUrl} />

            )
            )}

        </div></>
    );
}

export default ItemListContainer;