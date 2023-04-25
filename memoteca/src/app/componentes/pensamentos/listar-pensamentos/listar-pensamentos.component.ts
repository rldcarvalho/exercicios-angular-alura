import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

  listarFavoritos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.favoritos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
    })
  }
}
