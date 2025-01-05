export interface Iproduct{
    pname: string;
    pdescription: string;
    pcatg: ProductCatg;
}

export enum ProductCatg{
    PRODUCT='product',
    CATLOG='catlog'
}