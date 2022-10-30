import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { UsersService } from './services/users/users.service';
import { OrdersService } from './services/orders/orders.service';
import { CustomersService } from './services/customers/customers.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';
@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    BrandsController,
  ],
  providers: [
    ProductsService,
    UsersService,
    OrdersService,
    CustomersService,
    CategoriesService,
    BrandsService,
  ],
})
export class AppModule {}
