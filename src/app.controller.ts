import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getAllProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `products => limit:${limit}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('products/:prodId')
  getSingleProduct(@Param('prodId') prodId: string) {
    return `product ${prodId}`;
  }

  @Get('categories/:catId/products/:prodId')
  getCategories(
    @Param('catId') catId: string,
    @Param('prodId') prodId: string,
  ) {
    return `product ${prodId} from category ${catId}`;
  }
}
