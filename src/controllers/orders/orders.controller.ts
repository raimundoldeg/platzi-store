import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 50) {
    return {
      message: `this gets all orders with ${limit} and ${offset}`,
    };
  }

  @Get(':/orderId')
  getSingle(@Param('orderId') orderId: string) {
    return {
      message: `this returns a single order with ${orderId}`,
    };
  }
}
