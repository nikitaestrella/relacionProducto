import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contenido as ContenidoSchema } from './../schema/contenido.schema'
import * as uuid from 'uuid'

import { Contenido } from './../model/contenido.model'
import { Model } from 'mongoose';

@Injectable()
export class ContenidoService {

  constructor(
    @InjectModel(Contenido.name) private readonly contenido: Model<ContenidoSchema>
  ) { }

  async addContenido(contenido: Contenido): Promise<ContenidoSchema> {
    const contenidoId = uuid.v4()
    const contenidoSchema = new this.contenido({
      contenidoId: contenidoId,
      nombre: contenido.nombre,
      descripcion: contenido.descripcion,
      visible: contenido.visible,
      user: contenido.user
    })
    await contenidoSchema.save()

    return contenidoSchema
  }

  async getContenidos(): Promise<ContenidoSchema[]> {
    const contenidoSchema = await this.contenido.find()
    return contenidoSchema
  }

  async getContenido(contenidoId: string): Promise<ContenidoSchema> {
    const contenidoSchema = await this.contenido.findOne({ contenidoId: contenidoId })
      .populate('userId', ['username', 'seller'] )
      .populate('contenidoId', ['contenidoname', 'seller'] )
      //.populate({ path: 'products.productId', model : 'Product'})
    return contenidoSchema
  }
}