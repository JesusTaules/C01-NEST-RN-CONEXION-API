import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
private juegos = [
    { id: 1, nombre: 'fortnite', genero: 'shooter' },
    { id: 2, nombre: 'fifa', genero: 'deportes' }
  ];

    findAll(genero?: string) {
  if (!genero) return this.juegos;
  return this.juegos.filter(j => j.genero === genero);
    }
}