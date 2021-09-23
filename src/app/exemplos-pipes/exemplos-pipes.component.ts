import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Livro bom',
    rating: 4.54321,
    numeroPaginas: 234,
    preco: 44.99,
    dataLancamento: new Date(),
    url: 'http://www.google.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
