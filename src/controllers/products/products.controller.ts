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
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products => limit:${limit}, offset: ${offset}, brand: ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':prodId')
  @HttpCode(HttpStatus.ACCEPTED)
  getSingle(@Res() response: Response, @Param('prodId') prodId: string) {
    response.status(200).send({
      message: `product ${prodId}`,
    });
  }

  @Post('')
  createSingle(@Body() payload: any) {
    return {
      message: `this creates a single product`,
      payload,
    };
  }

  @Put(':prodId')
  updateSingle(@Param('prodId') prodId: string, @Body() payload: any) {
    return {
      prodId,
      payload,
    };
  }

  @Delete(':prodId')
  deleteSingle(@Param('prodId') prodId: string) {
    return prodId;
  }
}
