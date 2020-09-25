import { HttpClient } from '@angular/common/http';
import { Component, Input, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from './../../core/dataShareService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit {


  @Input() data: any[];
  @Input() columns: any[];
  @Input() columnsName: any[];

  displayColumns: string[];
  displayColumnsNames: string[];

  displayData: any[];

  isLoadingResults = true;

  constructor(
    private dataShareService: DataShareService,
    private router: Router
  ) { }

  ngAfterContentInit(): void {
    this.displayColumns = this.columns;
    this.displayColumnsNames = this.columnsName;
    this.displayData = this.data;
  }

  loadFilm(film): void {
    this.dataShareService.setFilm(film).then( () => {
      this.router.navigate(['home/film']);
    });
  }
}




