import { createContext, useState } from "react";

export const ProductContext = createContext()

const initialProduct = [
    {id:0, product: "Basketball", price: 12 },
    {id:1, product: "Baseball", price: 9 },
    {id:2, product: "Tennis Racquet", price: 89 },
]

export const ProductProvider = (props) => {
 
    const [products, setProducts] = useState(initialProduct)

    const increasePrice = (id) => {       
        
        const newProducts = [...products];
        newProducts[id].price += 1
        setProducts(newProducts);      
    }
    const decreasePrice = (id) => {        
        
        const newProducts = [...products];
        newProducts[id].price -= 1
        setProducts(newProducts);        
    }

    return (<ProductContext.Provider value = {{products,setProducts, increasePrice, decreasePrice}}>
                {props.children}
           </ProductContext.Provider>)
};
