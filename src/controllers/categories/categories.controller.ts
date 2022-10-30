import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':catId/products/:prodId')
  getAll(@Param('catId') catId: string, @Param('prodId') prodId: string) {
    return {
      message: `product ${prodId} from category ${catId}`,
    };
  }
}
