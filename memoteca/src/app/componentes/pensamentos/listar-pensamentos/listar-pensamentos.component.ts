import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae velit nec ipsum gravida venenatis non id elit. Suspendisse vitae tempus ex. Aliquam ultrices, nunc sed fringilla iaculis, augue sem commodo purus, mattis posuere erat sapien a mauris nam.',
      autoria: 'Lorem ipsum.com',
      modelo: 'modelo1'
    }
  ]
}
