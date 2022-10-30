import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    BrandsController,
  ],
  providers: [],
})
export class AppModule {}
