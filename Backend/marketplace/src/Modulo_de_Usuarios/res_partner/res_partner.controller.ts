import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResPartnerService } from './res_partner.service';
import { CreateResPartnerDto } from './dto/create-res_partner.dto';
import { UpdateResPartnerDto } from './dto/update-res_partner.dto';

@Controller('res-partner')
export class ResPartnerController {
  constructor(private readonly resPartnerService: ResPartnerService) {}

  @Post()
  create(@Body() createResPartnerDto: CreateResPartnerDto) {
    return this.resPartnerService.create(createResPartnerDto);
  }

  @Get()
  findAll() {
    return this.resPartnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resPartnerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResPartnerDto: UpdateResPartnerDto) {
    return this.resPartnerService.update(+id, updateResPartnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resPartnerService.remove(+id);
  }
}
