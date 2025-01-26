import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

      const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
    
      const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        console.log({count});
    
        setShoppingCart(oldShoppinCart => {
    
          if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppinCart;
            return rest;
          }
    
          return {
            ...oldShoppinCart,
            [product.id]: { ...product, count }
          }
        })
      }

      return {
        shoppingCart,
        onProductCountChange
      }

}