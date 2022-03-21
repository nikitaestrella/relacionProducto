import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserSchema } from './../schema/user.schema'
import * as uuid from 'uuid'

import { User } from './../model/user.model'
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly user: Model<UserSchema>,
  ) { }

  async getUser(userId: string) : Promise<UserSchema>  {
    const userSchema = await this.user.findOne({ userId: userId })
    if (!userSchema) {
      throw new NotFoundException(`Not Found User with id=${userId}`)
    }
    return userSchema
  }

  async getUsers() : Promise<UserSchema[]>  {
    const userSchema = await this.user.find()
    return userSchema
  }

  async addUser (username: string, password: string, seller: boolean) : Promise<UserSchema>  {
    const userId = uuid.v4()
    const userchema = new this.user({
      userId: userId,
      username: username,
      password: password,
      seller: seller
    })
    await userchema.save()

    return userchema
  }

}
