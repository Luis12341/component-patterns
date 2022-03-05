import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/product.interfaces';

interface ProductHook {
    increaseBy: (value: number) => void;
    counter: Number;
}

interface useProductsArgs{
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductsArgs): ProductHook => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {
        if(isControlled.current){
            return onChange!({product,count: value})
        }
        let newValue =  Math.max(counter+ value, 0)
        setCounter(newValue);
        onChange && onChange({ count: newValue, product })
    };

    useEffect(() => {
      setCounter(value)
    }, [value])
    

    return {
        increaseBy,
        counter,
    };
};
