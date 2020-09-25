export interface Home {
    count: number;
    next: string;
    previus: any;
    results: Result[];
}

export interface Result {
    climate: string;
    created: string;
    diameter: string;
    films: Array<string>;
    gravity: string;
    name: string;
    orbital_period: string;
    popuation: string;
    residents: Array<string>;
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}


export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    urle: string;
}

export interface HomePeople {
    count: number;
    next: string;
    previus: any;
    results: People[];
}

export interface People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    created: string;
    films: string[];
}


