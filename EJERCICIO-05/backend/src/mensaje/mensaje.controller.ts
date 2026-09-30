import { Controller, Get } from '@nestjs/common'; 

@Controller('mensaje')
export class MensajeController {
  
  @Get()
  getMensaje() {
    return { message: '¡Ruta encontrada con éxito!' };
  }
}