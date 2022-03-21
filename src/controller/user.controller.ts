import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './../service/user.service';
import { Request } from 'express'
import { User as UserParam } from './../model/user.model'
import { User as UserBody } from './../model/user.model'

@Controller('v1')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('/users')
  async addUser(@Param() params: UserParam, @Body() user: UserBody, @Req() request: Request): Promise<any> {
    const userSchema = await this.userService.addUser(
      user.username, user.password, user.seller
    )
    return userSchema
  }

  @Get('/users')
  async getUsers(): Promise<any> {
    return this.userService.getUsers();
  }

  @Get('/users/:userId')
  async getUser(@Param() params: UserParam): Promise<any> {
    return this.userService.getUser(params.userId);
  }
}