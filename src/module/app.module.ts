import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductController } from '../controller/product.controller'
import { ProductService } from '../service/product.service'
import { UserController } from './../controller/user.controller'
import { UserService } from './../service/user.service'

import { User, UserSchema } from './../schema/user.schema'
import { Product, ProductSchema } from './../schema/product.schema'
import { Order, OrderSchema } from 'src/schema/order.schema'
import { OrderController } from 'src/controller/order.controller'
import { OrderService } from 'src/service/order.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name , schema: UserSchema },
      { name: Product.name , schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
      
      //{ name: Member.name, schema: MemberSchema },
      //{ name: MemberActivityProgress.name, schema: MemberActivityProgressSchema }
    ]),
  ],
  controllers: [
    ProductController,
    UserController,
    OrderController
  ],
  providers: [
    ProductService,
    UserService,
    OrderService
  ]
})
export class HmkModule {}

