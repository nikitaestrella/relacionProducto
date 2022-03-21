//import { IsOptional, IsUUID, Matches } from "class-validator"

export class Product {
    productId: string
    name: string
    descripcion: string
    price: number
    priceDesc: number
    stock: number
    images: string[]
}