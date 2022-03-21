import { Prop, SchemaFactory, Schema as NestMongooseSchema } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import * as mongoose from 'mongoose'
import { User } from './user.schema'

@NestMongooseSchema({ collection: 'order', timestamps: true })
export class Order extends Document {
    @Prop({ required: true, index: true, unique: true })
    orderId: string

    @Prop({ required: true })
    totalPrice: number
    
    @Prop( { required: true })
    products: []

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date
}

export const OrderSchema = SchemaFactory.createForClass(Order)