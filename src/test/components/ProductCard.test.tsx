import { ProductCard } from "../../components";
import { render, screen, fireEvent } from '@testing-library/react';
import { product1 } from "../data/products";



describe('ProductCard', () => {

    test('debe de mostrar el component con el nombre del producto', () => {

      const { asFragment } = render(<ProductCard  product={ product1}>
        {
          () => (
            <h1>Product Card</h1>
          )
        }
        </ProductCard>
      
      )
      expect(asFragment()).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {
      
      const { asFragment } = render(<ProductCard  product={ product1}>
        {
          ({ count, increaseBy }) => (
            <>
            
            <h1>Product Card</h1>
            <span>Count: { count }</span>
            <button onClick={ () => increaseBy(1)}>+1</button>
            </>
          )
        }
        </ProductCard>
      
      )
      
    });

    render(<ProductCard  product={ product1}>
      {
        ({ count, increaseBy }) => (
          <>
          
          <h1>Product Card</h1>
          <span> { count }</span>
          <button onClick={ () => increaseBy(1)}>+1</button>
          </>
        )
      }
      </ProductCard>)

    const button = screen.getByRole('button');
    const counterText = screen.getByText('0');
    fireEvent.click(button);

    expect(screen.getByText('1')).toBeInTheDocument();




    
    
})