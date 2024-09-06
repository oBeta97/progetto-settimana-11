export interface TrackList {
    data: Track[];
}

export interface Track {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version?:          TitleVersion;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    DatumType;
}

export interface Album {
    id:           number;
    title:        string;
    cover:        string;
    cover_small:  string;
    cover_medium: string;
    cover_big:    string;
    cover_xl:     string;
    md5_image:    string;
    tracklist:    string;
    type:         AlbumType;
}

export type AlbumType = "album";

export interface Artist {
    id:             number;
    name:           string;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}

export type ArtistType = "artist";

export type TitleVersion = "" | "(Raw)";

export type DatumType = "track";
