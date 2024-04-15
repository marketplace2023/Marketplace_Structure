import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderService } from './sale_order.service';
import { CreateSaleOrderDto } from './dto/create-sale_order.dto';
import { UpdateSaleOrderDto } from './dto/update-sale_order.dto';

@Controller('sale-order')
export class SaleOrderController {
  constructor(private readonly saleOrderService: SaleOrderService) {}

  @Post()
  create(@Body() createSaleOrderDto: CreateSaleOrderDto) {
    return this.saleOrderService.create(createSaleOrderDto);
  }

  @Get()
  findAll() {
    return this.saleOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderDto: UpdateSaleOrderDto,
  ) {
    return this.saleOrderService.update(+id, updateSaleOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderService.remove(+id);
  }
}
//creacion-ordenes-venta                          # (sale.order)
//# Permite la creación de nuevas órdenes de venta en el sistema.

//gestion-estado-ordenes                          # (sale.order)
//# Administra el estado de las órdenes de venta, como pendientes, confirmadas, entregadas, etc.

//informe-ventas-periodo-tiempo                   # (sale.order)
//# Genera un informe de las ventas realizadas dentro de un período de tiempo específico.

//resumen-ordenes-pendientes-pago                 # (sale.order)
//# Resume las órdenes de venta pendientes de pago en el sistema.

//informe-devoluciones-reembolsos                  # (sale.order, stock.picking)
//# Proporciona un informe de las devoluciones y reembolsos realizados en el sistema, incluyendo detalles de las órdenes de venta y los movimientos de stock asociados.

//historial-compras-usuarios-registrados          # (sale.order)
//# Proporciona el historial de compras para los usuarios registrados en el sistema.

//informe-transacciones-completadas              # (sale.order)
//# Genera un informe de las transacciones de compra completadas en el sistema.

//analisis-patrones-compra-cliente               # (sale.order, res.users)
//# Realiza un análisis de los patrones de compra de los clientes, utilizando datos de órdenes de venta y usuarios registrados.

//aplicacion-automatica-promociones                # (sale.order, product.pricelist)
//# Aplica automáticamente las promociones configuradas a las órdenes de venta durante el proceso de compra.

//informe-efectividad-promociones                   # (sale.order, product.pricelist.item, product.pricelist)
//# Genera un informe sobre la efectividad de las promociones en las ventas, utilizando datos de órdenes de venta y listas de precios.

//analisis-ventas-impulsadas-promociones            # (sale.order, product.pricelist.item, product.pricelist)
//# Realiza un análisis de las ventas impulsadas por las promociones, utilizando datos de órdenes de venta y listas de precios.
