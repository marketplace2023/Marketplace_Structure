import { Module } from '@nestjs/common';
import { ProductsCategoryController } from './products-category.controller';
import { ProductsCategoryService } from './products-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategory } from './entities/products-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsCategory])],
  controllers: [ProductsCategoryController],
  providers: [ProductsCategoryService],
})
export class ProductsCategoryModule {}
