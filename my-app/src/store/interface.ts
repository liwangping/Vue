export interface State {
    movieList: movie[];
}

export interface movie{
    name: String;
    genres: [];
    title: string;
    id: string;
    alt: string;
    image:[];
    year: string;
    dirextors: [];
    subtype: string;
    original_title: string;
    collect_count: number;
    cast: star[];
    rating: rating;
}

export interface star {
    name: string;
    id: string;
    avatars: [];
    alt: string;

}

export interface rating {
    max: number;
    average: string;
    stars: number;
    min: number;
}

