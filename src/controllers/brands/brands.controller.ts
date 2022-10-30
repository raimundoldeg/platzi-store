import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 50) {
    return `this gets all brands with ${limit} and ${offset}`;
  }

  @Get(':/brandId')
  getSingle(@Param('brandId') brandId: string) {
    return `this returns a single brand with ${brandId}`;
  }
}
