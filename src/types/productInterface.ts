export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      IRating;
}

export interface IRating {
    rate:  number;
    count: number;
}

export interface IResponse<T> {
    status: number; 
    data?: T;     
    error?: string; 
}

export interface ICardProps{
    product: IProduct;
}