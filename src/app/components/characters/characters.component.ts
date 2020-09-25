import { Component, Input, OnInit } from '@angular/core';
import { Characters } from './models/characters.model';
import { CharacterService } from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  spinner = false;
  @Input() url: any[];
  characters: Characters;
  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.characterService.getCharacter(this.url).subscribe(resp => {
      this.spinner = false;
      this.characters = resp;
    });
  }

}
