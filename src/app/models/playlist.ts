import { Song } from "./song";

export interface Playlist {
    id: number,
    title: string,
    photo: string,
    duration: number,
    songs: Array<Song>
}
