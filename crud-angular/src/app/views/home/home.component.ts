//import { PeriodicElement } from './../../../models/PeriodicElement';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PeriodicElementService } from 'src/app/services/periodic-element.service';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { PeriodicElement } from 'src/models/PeriodicElement';

const ELEMENT_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PeriodicElementService]
})
export class HomeComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource!: PeriodicElement[];

  constructor(
    public dialog: MatDialog,
    public periodicElementService: PeriodicElementService
    ) {
      this.periodicElementService.getElements().subscribe((data: PeriodicElement[]) => {
        this.dataSource = data;
      })
    }

  openDialog(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      data: element === null ? {
        position: null,
        name: '',
        weight: null,
        symbol: ''
      } : {
        id: element.id,
        position: element.position,
        name: element.name,
        weight: element.weight,
        symbol: element.symbol
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if (this.dataSource.map(p => p.id).includes(result.id)){
          this.periodicElementService.editElement(result).subscribe((data: PeriodicElement) => {
            const index = this.dataSource.findIndex(p => p.id === data.id)
            this.dataSource[index] = data;
            this.table.renderRows();
          })
        }else{
          this.periodicElementService.createElement(result).subscribe((data: PeriodicElement) => {
            this.dataSource.push(data);
            this.table.renderRows();
          })
        }
      }
    });
  }

  deleteElement(id: number): void {
    this.periodicElementService.deleteElement(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(p => p.id !== id);
    })
  }

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }
}
