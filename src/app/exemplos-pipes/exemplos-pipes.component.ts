import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  filtro: string = '';

  cursos: string[] = ['Java', 'Angular']

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

  obterCursos() {

    if (this.cursos.length === 0 || this.filtro === undefined
    || this.filtro.trim() === '') {
      return this.cursos;
    }

    return this.cursos.filter(
       v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  addCurso(valor: string) {
    this.cursos.push(valor);
    console.log(this.cursos);
  }

}
