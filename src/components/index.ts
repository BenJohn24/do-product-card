import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTititle';

export { ProductButtons }  from './ProductButtons';
export { ProductTitle }  from './ProductTititle';
export { ProductImage } from './ProductImage';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, { 
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;
