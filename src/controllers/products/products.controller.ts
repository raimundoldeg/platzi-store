import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  HttpStatus,
  HttpCode,
  ValidationPipe,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products/products.service';

import { CreateProductDto, UpdateProductDto } from '../../dtos/product.dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':prodId')
  @HttpCode(HttpStatus.ACCEPTED)
  getSingle(@Param('prodId', ValidationPipe) prodId: string) {
    return this.productsService.findSingle(prodId);
  }

  @Post('')
  createSingle(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':prodId')
  updateSingle(
    @Param('prodId') prodId: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.updateSingle(prodId, payload);
  }

  @Delete(':prodId')
  deleteSingle(@Param('prodId') prodId: string) {
    return prodId;
  }
}
