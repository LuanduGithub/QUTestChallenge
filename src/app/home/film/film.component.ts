import { Component, OnInit } from '@angular/core';
import { HomeService } from './../services/home.service';
import { DataShareService } from './../../core/dataShareService';
import { Film } from '../model/home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  spinner = false;
  filmData: Film;
  constructor(
    private homeService: HomeService,
    private dataShareService: DataShareService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.getFilmSelected();
  }

  async getFilmSelected() {
    const apiUrl = await this.dataShareService.getFilm();
    if (apiUrl) {
      this.homeService.getFilm(apiUrl).subscribe(resp => {
        this.spinner = false;
        this.filmData = resp;
      }, err => {
        console.log(err);
      });
    } else {
      this.spinner = false;
      this.router.navigate(['home']);
    }
  }

  async back() {
    await this.dataShareService.setFilm('');
    this.router.navigate(['home']);
  }

}
