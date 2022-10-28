import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':catId/products/:prodId')
  getCategories(
    @Param('catId') catId: string,
    @Param('prodId') prodId: string,
  ) {
    return `product ${prodId} from category ${catId}`;
  }
}
