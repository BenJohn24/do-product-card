import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs )  => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );
    const increaseBy = (value: number) => {
        
        let newValue = Math.max( counter + value, 0 );
        newValue = initialValues?.maxCount !== undefined ?  Math.min(newValue, initialValues?.maxCount) : newValue;
        
        setCounter( newValue );
        
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }
    useEffect(() => {
        if( !isMounted.current ) return;

        setCounter( value );
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);


    return{
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}