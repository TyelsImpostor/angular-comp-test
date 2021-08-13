import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista_nombre',
  templateUrl: './lista_nombre.html'
})
export class lista_nombre implements OnInit {
  productos: Array<{ codigo: string; nombre: string; precio: number }>;
  constructor() {
    this.productos = [
      { codigo: 'AAA', nombre: 'Lapiz', precio: 2000 },
      { codigo: 'BBB', nombre: 'Cuaderno', precio: 5050 },
      { codigo: 'CCC', nombre: 'Lentes', precio: 8942 },
      { codigo: 'DDD', nombre: 'Goma', precio: 89721 },
      { codigo: 'GGG', nombre: 'Cuchara', precio: 25876 }
    ];
  }
  ngOnInit() {}
}
