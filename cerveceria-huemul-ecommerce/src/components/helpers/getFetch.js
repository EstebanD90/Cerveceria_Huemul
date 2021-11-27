const items = [
    {
        id: 1,
        name: "cerveza golden", 
        price: 220,
        description: "Golden",
        image: '../../images/cerveza-rubia.jpg'
    },
    {
        id: 2,
        name: "cerveza red scottish",
        price: 250,
        description: "Irish Red",
        image: '../../images/cerveza-irish-red.jpg'
    },
    {
        id: 3,
        name: "cerveza ipa",
        price: 270,
        description: "IPA",
        image: '../../images/cerveza-IPA2.jpg'
    },
    {
        id: 4,
        name: "cerveza porter",
        price: 260,
        description: "Porter",
        image: '../../images/cerveza-porter.jpg'
    },    
    {
        id: 5,
        name: "cerveza apa",
        price: 260,
        description: "APA",
        image: '../../images/cerveza-APA.jpg'
    },
    {
        id: 6,
        name: "cerveza stout",
        price: 280,
        description: "Stout",
        image: '../../images/cerveza-stout.jpg'
    }
];


export const productos = new Promise((aceptado, rechazada)=>{
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(items)        
    }, 3000);
    //rechazada('400 not found')
})
