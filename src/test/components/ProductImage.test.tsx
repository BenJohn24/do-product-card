import { render, screen } from "@testing-library/react"
import ProductCard, { ProductImage } from "../../components"
import { product2 } from "../data/products"

describe('ProductImage', () => {
    test('debe mostrar el component con la imagen correspondiente ', () => {
        const { img} = product2
      render(<ProductImage img={ img } />)

      const imgElement = screen.getByRole('img');

      expect(imgElement).toHaveAttribute('src', img);
    });

    test('debe de mostrar el componente con una imagen', () => {
      const { asFragment } = render( <ProductCard product={ product2 }>
     
        {
            ()=> (

                <ProductImage />
            )
        }
     
      </ProductCard>
      );

      expect(asFragment()).toMatchSnapshot();
    })
    
    
})