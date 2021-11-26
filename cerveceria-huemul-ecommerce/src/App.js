//import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';

//import { getFetch } from './components/data/getFetch';

function App() {

  /*
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [bool, setBool] = useState(true)

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

  */



  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a los productos!"/>

{/*
        <div className='card-columns'>

        { loading ? <h1>Cargando productos..</h1> : products.map(prod => <div key={prod.id} className="card w-80 mt-5">
                                        <div className="card-header">
                                          {prod.name}
                                        </div>
                                        <div className="card-body">
                                          <img src={prod.image} alt="foto" />
                                          <p>$ {prod.price}</p>                                          
                                        </div>
                                        <div className="card-footer">
                                          <button className="btn btn-outline-primary btn-block">
                                           detalle de Cerveza
                                          </button>
                                        </div>

                                           </div> 
        )} 

        </div>
*/}
    </div>
  );
}

export default App;
