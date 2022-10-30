import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getAll(@Query('limit') limit = 100) {
    return {
      message: `this gets all users with a ${limit}`,
    };
  }

  @Get(':userId')
  getSingle(@Param('userId') userId: string) {
    return {
      message: `this gets a single user with its ${userId}`,
    };
  }
}
