import { ProductTitle, ProductCard } from "../../components";
import { render, screen } from '@testing-library/react';
import { product1 } from "../data/products";



describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
   
      render(<ProductTitle title="Hola" className="custom-class"/>)

      console.log( );
    });

    test('debe de mostrar el component con el nombre del producto', () => {

      const { asFragment } = render(<ProductCard  product={ product1}>
        {
          () => (
            <ProductTitle />
          )
        }
        </ProductCard>
      
      )
      expect(asFragment()).toMatchSnapshot();
    })
    
})