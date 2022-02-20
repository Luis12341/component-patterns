export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: Number;
    product: Product;
}

