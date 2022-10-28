import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getAllProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `products => limit:${limit}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':prodId')
  getSingleProduct(@Param('prodId') prodId: string) {
    return `product ${prodId}`;
  }
}
