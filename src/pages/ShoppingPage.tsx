// import { useState } from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
// import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css'
// import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/product";

const product = products[0];



export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >

        {
          // { reset, increaseBy, isMaxCountReached, count, maxCount } 
          ( { } ) => (
            <>
              <ProductImage  />
              <ProductTitle />
              <ProductButtons />
            </>

          )
        }
      </ProductCard>
    </div>
  )
}

