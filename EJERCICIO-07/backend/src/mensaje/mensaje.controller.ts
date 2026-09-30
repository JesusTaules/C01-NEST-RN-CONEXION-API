import { Controller, Get } from '@nestjs/common';

@Controller('mensaje')
export class MensajeController {
    @Get()
  getMensaje() {
    return { message: 'backend conectado' };
  }
}
