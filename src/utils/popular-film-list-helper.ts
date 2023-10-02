export function getPopularFilmByNumber(number: number) {
    switch (number) {
        case 1:
            return 'firstPopularFilm';
        case 2:
            return 'secondPopularFilm';
        case 3:
            return 'thirdPopularFilm';
        default:
            return '';
    }
}

export function getNumberByPopularFilm(level: string) {
    switch (level) {
        case 'firstPopularFilm':
            return 1;
        case 'secondPopularFilm':
            return 2;
        case 'thirdPopularFilm':
            return 3;
        default:
            return 0;

    }
}