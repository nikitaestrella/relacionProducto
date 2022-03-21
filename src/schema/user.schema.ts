import { Prop, SchemaFactory, Schema as NestMongooseSchema } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

@NestMongooseSchema({ collection: 'users', timestamps: true })
export class User extends Document {
    @Prop({ required: true, index: true, unique: true })
    userId: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    readonly password: string;
    
    @Prop({ required: true })
    seller: boolean;

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)