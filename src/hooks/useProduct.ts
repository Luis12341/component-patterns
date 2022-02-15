
import {useState} from "react";

interface ProductHook{
    increaseBy: Function,
    counter: Number
}

export const useProduct = () :ProductHook => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter((prev) => Math.max(prev + value, 0));
    };

    return {
        increaseBy,
        counter
    }
}
