import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product as ProductSchema } from './../schema/product.schema'
import * as uuid from 'uuid'

import { Model } from 'mongoose';
import { Product } from 'src/model/product.model';


@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private readonly product: Model<ProductSchema>,
  ) { }


  async addProduct(product: Product): Promise<ProductSchema> {
    const productId = uuid.v4()
    const productchema = new this.product({
      productId: productId,
      name: product.name,
      descripcion: product.descripcion,
      price: product.price,
      priceDesc: product.priceDesc,
      stock: product.stock,
      images: product.images
    })
    await productchema.save()

    return productchema
  }
}
