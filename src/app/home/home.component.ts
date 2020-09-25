import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  spinner = false;
  data: any;

  showTable = false;
  columns: string[];
  columnsName: string[];
  dataFilm: any;
  columnsNameFilm: string[];
  columnsFilm: string[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.showTable = false;
    this.spinner = true;
    const pipe = new DatePipe('en-US');
    this.homeService.getData().subscribe(resp => {
      this.spinner = false;
      this.data = resp.results.map(p => {
        return {
          name: p.name,
          climate: p.climate,
          created: pipe.transform(new Date(p.created), 'MMM d, y'),
          diameter: `${p.diameter} Km`,
          film: p.films,
          terrain: p.terrain,
          rotation_period: `${p.rotation_period} Hs`
        };
      });
      /* obj contain the columns to display */
      this.columns = ['name', 'climate', 'created', 'diameter', 'film', 'rotation_period', 'terrain'];
      /* obj contain the columns name to display */
      this.columnsName = ['Name', 'Climate', 'Created', 'Diameter', 'Films Apparences', 'Rotation Period', 'Terrain'];
      this.showTable = true;
    }, err => {
      console.log(err);
    });
  }


  getPeople(): void {
    this.showTable = false;
    this.spinner = true;
    const pipe = new DatePipe('en-US');
    this.homeService.getPeople().subscribe(resp => {
      this.spinner = false;
      this.data = resp.results.map(p => {
        return {
          name: p.name,
          height: `${p.height} cm`,
          mass: p.mass,
          hair_color: p.hair_color,
          skin_color: p.skin_color,
          eye_color: p.eye_color,
          birth_year: p.birth_year,
          created: pipe.transform(new Date(p.created), 'MMM d, y'),
          film: p.films,
        };
      });
      /* obj contain the columns to display */
      this.columns = ['name', 'height', 'mass', 'hair_color', 'film', 'skin_color', 'eye_color', 'birth_year', 'created'];
      /* obj contain the columns name to display */
      this.columnsName = ['Name', 'Height', 'Mass', 'Hair Color', 'Film Apparences', 'Skin Color', 'Eye Color', 'Birth Year', 'Created'];
      this.showTable = true;
    }, err => {
      console.log(err);
    });
  }

}
