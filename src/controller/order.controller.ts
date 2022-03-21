import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { OrderService } from '../service/order.service';
import { Request } from 'express'
import { Order as OrderParam } from './../model/order.model'
import { Order as OrderBody } from './../model/order.model'

@Controller('v1')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/order')
  async addOrder(@Param() params: OrderParam, @Body() order: OrderBody, @Req() request: Request): Promise<any> {
    const orderSchema = await this.orderService.addOrder(order)
    return orderSchema
  }

  @Get('/order')
  async getOrders(@Param() params: OrderParam, @Body() order: OrderBody, @Req() request: Request): Promise<any> {
    const orderSchema = await this.orderService.getOrders()
    return orderSchema
  }

  @Get('/order/:orderId')
  async getOrder(@Param() params: OrderParam, @Body() order: OrderBody, @Req() request: Request): Promise<any> {
    const orderSchema = await this.orderService.getOrder(params.orderId)
    return orderSchema
  }

}
