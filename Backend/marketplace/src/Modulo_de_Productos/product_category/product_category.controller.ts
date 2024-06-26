import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoryService.create(createProductCategoryDto);
  }

  @Get()
  findAll() {
    return this.productCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.update(+id, updateProductCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCategoryService.remove(+id);
  }
}
//|-- gestion-categorias-producto                                                           # (product.category)
//# Gestiona las categorías de productos para organizar y estructurar los productos en diferentes grupos o niveles.

//analisis-ventas-categoria                                                             # (product.category)
//# Ofrece análisis de ventas por categoría de productos, permitiendo entender las tendencias de compra de los clientes.

//creacion-edicion-eliminacion-categorias-productos    # (product.category)
//# Permite la creación, edición y eliminación de categorías de productos en el sistema.

//informe-ventas-categoria-productos                   # (sale.order.line, product.template, product.category)
//# Genera un informe de las ventas realizadas por categoría de productos en el sistema.

//analisis-tendencias-compra-categoria                 # (sale.order.line, product.template, product.category)
//# Realiza un análisis de las tendencias de compra por categoría de productos.

//resumen-productos-mejor-clasificados-categoria       # (product.template, product.category)
//# Ofrece un resumen de los productos mejor clasificados dentro de cada categoría en el sistema.

//informe-inventario-categoria                         # (product.template, stock.quant, product.category)
//# Genera un informe del inventario de productos por categoría en el sistema.

//analisis-tendencias-compra-categoria                           # (sale.order, product.category)
//# Realiza un análisis de las tendencias de compra por categoría de productos.
