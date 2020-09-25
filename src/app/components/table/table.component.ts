import { HttpClient } from '@angular/common/http';
import { Component, Input, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from './../../core/dataShareService';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit, AfterViewInit {


  @Input() data: any[];
  @Input() columns: any[];
  @Input() columnsName: any[];

  @ViewChild(MatSort) sort: MatSort;


  displayColumns: string[];
  displayColumnsNames: string[];

  displayData: any;

  isLoadingResults = true;

  constructor(
    private dataShareService: DataShareService,
    private router: Router
  ) { }

  ngAfterContentInit(): void {
    this.displayColumns = this.columns;
    this.displayColumnsNames = this.columnsName;
    this.displayData = new MatTableDataSource(this.data);
  }
  ngAfterViewInit() {
    this.displayData.sort = this.sort;
  }

  loadFilm(film): void {
    this.dataShareService.setFilm(film).then(() => {
      this.router.navigate(['home/film']);
    });
  }
}




