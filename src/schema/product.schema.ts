import { Prop, SchemaFactory, Schema as NestMongooseSchema } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

@NestMongooseSchema({ collection: 'products', timestamps: true })

export class Product extends Document {
    @Prop({ required: true, index: true, unique: true })
    productId: string

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    descripcion: string
    
    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    priceDesc: number

    @Prop({ required: true })
    stock: number

    @Prop({ required: false })
    images: string[]

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product)