import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly id?: string;
  @IsString()
  @IsNotEmpty()
  readonly name?: string;
  @IsString()
  @IsNotEmpty()
  readonly description?: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price?: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock?: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image?: string;
}
