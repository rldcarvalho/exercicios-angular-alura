import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, filter, map, switchMap, tap, throwError } from 'rxjs';
import { listTrigger } from 'src/app/animations';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 1000;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  animations: [ listTrigger ]
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro = '';
  livrosResultado: LivrosResultado;

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    tap(() => {
      console.log('Fluxo inicial de dados');
    }),
    filter(
      (valorDigitado) => valorDigitado.length >= 3
    ),
    switchMap(
      (valorDigitado) => this.service.buscar(valorDigitado)
    ),
    map(resultado => this.livrosResultado = resultado),
    map(resultado => resultado.items ?? []),
    tap(console.log),
    map(items => this.livrosResultadoParaLivros(items)),
    catchError(erro =>
      { console.log(erro);
        return throwError(() =>
        new Error(this.mensagemErro = `Ops, ocorreu um erro! Recarregue a aplicação!`));
      })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }

}



