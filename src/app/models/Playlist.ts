import { Song } from "./song";
import { User } from "./User";

export interface Playlist {
    id: number,
    title: string,
    photo: string,
    duration: number,
    songs: Array<Song>
    user: User
}
