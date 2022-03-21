import { Prop, SchemaFactory, Schema as NestMongooseSchema } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import * as mongoose from 'mongoose'
import { User } from './user.schema'


@NestMongooseSchema({ collection: 'contenido', timestamps: true })
export class Contenido extends Document {

    @Prop({ required: true, index: true, unique:true })
    contenidoId: string

    @Prop({ required: true })
    nombre: string

    @Prop({ required: true })
    descripcion: string

    @Prop( { required: true })
    visible: boolean

    @Prop({ required: true, index: true, unique: true })
    userId: string

 

  
}

export const ContenidoSchema = SchemaFactory.createForClass(Contenido)