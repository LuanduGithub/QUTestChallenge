import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataShareService {
    film: any;
    constructor() { }
    async getFilm() {
        return this.film;
    }
    async setFilm(data) {
        return this.film = data;
    }
}
