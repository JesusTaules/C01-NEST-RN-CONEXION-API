import { Controller, Get, Param, Query } from '@nestjs/common';
import { JuegosService } from './juegos.service';

@Controller('juegos')
export class JuegosController {
  constructor(
    private readonly juegosService: JuegosService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juegosService.findAll(String(id));
  }

  @Get()
    findAll(@Query('genero') genero?: string) {
    return this.juegosService.findAll(genero);
    }
}