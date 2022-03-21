import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ContenidoService } from './../service/contenido.service';
import { Request } from 'express'
import { Contenido as ContenidoParam } from './../model/contenido.model'
import { Contenido as ContenidoBody } from './../model/contenido.model'

@Controller('v1')
export class ContenidoController {
  constructor(private readonly contenidoService: ContenidoService) {}


  @Post('/contenido')
  async addContenido(@Param() params: ContenidoParam, @Body() contenido: ContenidoBody, @Req() request: Request): Promise<any> {
    const contenidoSchema = await this.contenidoService.addContenido(contenido)
    return contenidoSchema
  }

  @Get('/contenido')
  async getContenidos(@Param() params: ContenidoParam, @Body() order: ContenidoBody, @Req() request: Request): Promise<any> {
    const contenidoSchema = await this.contenidoService.getContenidos()
    return contenidoSchema
  }

  @Get('/contenido/:contenidoId')
  async getContenido(@Param() params: ContenidoParam, @Body() order: ContenidoBody, @Req() request: Request): Promise<any> {
    const contenidoSchema = await this.contenidoService.getContenido(params.contenidoId)
    return contenidoSchema
  }
}