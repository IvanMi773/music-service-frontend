import { Song } from "./song";
import { User } from "./User";

export interface Search {
    users: Array<User>
    songs: Array<Song>
}
