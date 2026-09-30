import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hola')

export class HolaController {
  @Get()
  saludar() {
    return { mensaje: '¡Hola desde NestJS! 🚀' };
  }
}

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('id')
  saludar(): string {
    return "endpoint modidficado";
  }

  @Get('pizzas')
  pizzas(): any {
    return this.appService.findAll;
  }

  @Get('mascotas/:id')
  mascotas(@Param('id') id: string): any {
    return "El id de la mascota es: " + id;
  }
}
