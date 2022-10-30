import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 50) {
    return {
      message: `this gets all customers with ${limit} and ${offset}`,
    };
  }

  @Get(':/customerId')
  getSingle(@Param('customerId') customerId: string) {
    return {
      message: `this returns a single customer with ${customerId}`,
    };
  }
}
