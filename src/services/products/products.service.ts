import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../../dtos/product.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 'wf32',
      name: 'Product 1',
      description: 'bla bla bla',
      price: 124,
      stock: 40,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findSingle(id: string) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    } else {
      return product;
    }
  }

  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateSingle(id: string, payload: UpdateProductDto) {
    const product = this.findSingle(id);
    if (!product) {
      return new NotFoundException(`Product ${id} not found`);
    } else {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
    }
  }

  deleteSingle(id: string) {
    const product = this.findSingle(id);
    if (!product) {
      return new NotFoundException(`Product ${id} not found`);
    } else {
      const index = this.products.findIndex((item) => item.id === id);
      this.products.splice(index, 1);
    }
  }
}
