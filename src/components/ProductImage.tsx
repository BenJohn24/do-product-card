import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';
import { CSSProperties, useContext } from "react";
import { ProductContext } from './ProductCard';


export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}
export const ProductImage = ({ img = '', className, style} : Props) => {

    const { product } =  useContext( ProductContext );
    let  imgToShow: string;
 
    if( img ){
         imgToShow = img;
    }else if ( product.img ){
     imgToShow = product.img;
    }else {
     imgToShow = noImage;
    }
 
 
     return (
         <img 
         className={ `${ styles.productImg } ${ className } `} src={ imgToShow ? imgToShow :  noImage } 
         style={ style }
         alt='Product Image' />
 
     )
 }