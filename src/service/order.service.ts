import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order as OrderSchema } from './../schema/order.schema'
import * as uuid from 'uuid'
import { Order } from './../model/order.model'
import { Model } from 'mongoose';

@Injectable()
export class OrderService {

  constructor(
    @InjectModel(Order.name) private readonly order: Model<OrderSchema>
  ) { }

  async addOrder(order: Order): Promise<OrderSchema> {
    const ordertId = uuid.v4()
    const orderchema = new this.order({
      orderId: ordertId,
      userId: order.userId,
      totalPrice: order.totalPrice,
      products: order.products
    })
    await orderchema.save()

    return orderchema
  }

  async getOrders(): Promise<OrderSchema[]> {
    const orderSchema = await this.order.find()
    return orderSchema
  }

  async getOrder(orderId: string): Promise<OrderSchema> {
    const orderSchema = await this.order.findOne({ orderId: orderId })
      .populate('userId', ['username', 'seller'] )
      //.populate({ path: 'products.productId', model : 'Product'})
    return orderSchema
  }
}