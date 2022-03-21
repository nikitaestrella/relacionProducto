import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Request } from 'express'
import { Product as ProductParam } from './../model/product.model'
import { Product as ProductBody } from './../model/product.model'

@Controller('v1')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/product')
  async addProduct(@Param() params: ProductParam, @Body() product: ProductBody, @Req() request: Request): Promise<any> {
    const productSchema = await this.productService.addProduct(product)
    return productSchema
  }
}
