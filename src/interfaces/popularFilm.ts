import {Movie} from "./movie";

export interface PopularFilm {
    entryDate: string,
    popularFilmId: string,
    firstPopularFilm: Movie,
    secondPopularFilm: Movie,
    thirdPopularFilm: Movie,
    popularFilmSetBy: string
}