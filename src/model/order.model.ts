//import { IsOptional, IsUUID, Matches } from "class-validator"

export class Order {
    orderId: string
    userId: string
    totalPrice: string
    products: []
}