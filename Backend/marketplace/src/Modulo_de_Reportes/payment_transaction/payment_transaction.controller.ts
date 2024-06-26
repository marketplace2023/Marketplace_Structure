import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentTransactionService } from './payment_transaction.service';
import { CreatePaymentTransactionDto } from './dto/create-payment_transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment_transaction.dto';

@Controller('payment-transaction')
export class PaymentTransactionController {
  constructor(
    private readonly paymentTransactionService: PaymentTransactionService,
  ) {}

  @Post()
  create(@Body() createPaymentTransactionDto: CreatePaymentTransactionDto) {
    return this.paymentTransactionService.create(createPaymentTransactionDto);
  }

  @Get()
  findAll() {
    return this.paymentTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentTransactionDto: UpdatePaymentTransactionDto,
  ) {
    return this.paymentTransactionService.update(
      +id,
      updatePaymentTransactionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentTransactionService.remove(+id);
  }
}

//analisis-metodos-pago-utilizados                              # (payment.transaction)
//# Realiza un análisis de los métodos de pago utilizados.
