import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import { getFetch } from './helpers/getFetch';



function AppEcommerce() { 
    const [products, setProducts] = useState([])  
    const [loading, setLoading] = useState(true)  
    const [bool, setBool] = useState(true)  
    
    useEffect(() => {
        getFetch//api Fetch()
        .then(data => {
            console.log('llamada Api')   
            setProducts(data)     
        })
        //.then(resp => console.log(resp))
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        return () => {
            console.log('clean')
        }
    },[])
    
    console.log('antes del rendering')
    console.log(products)
    ////     [<li>1</li>, <li>2</li>,....]
    return (
        <div className="App">   
            <NavBar />        
            { loading ? <h1>Cargando...</h1> :  products.map(prod => <div key={prod.id} className="card w-50 mt-5" >
                                        <div className="card-header">
                                            {prod.name}
                                        </div>
                                        <div className="card-body">
                                            <img src={prod.foto} alt="foto" />
                                            {prod.price}
                                        
                                        </div>
                                        <div className="card-footer">
                                            
                                                <button className="btn btn-outline-primary btn-block">
                                                    detalle de persona
                                                </button>
                                         
                                        </div>
                                        
                                    </div> 
            )} 
             
            {/* <button onClick={()=>setBool(!bool)}>click</button> */}
        </div>
    );
}

export default AppEcommerce;

