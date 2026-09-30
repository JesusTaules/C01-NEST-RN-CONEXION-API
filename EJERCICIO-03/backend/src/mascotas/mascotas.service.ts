import { Injectable, Get } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Injectable()
export class MascotasService {
    private mascotas = [
    { id: 1, nombre: 'conejo', peso: 9 },
    { id: 2, nombre: 'perro', peso: 11 }
  ];
    findOne(id: number) {
        return this.mascotas.find(m => m.id === id);
    }
}

