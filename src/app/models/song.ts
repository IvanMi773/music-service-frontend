import { User } from "./User";

export interface Song {
    id: number,
    username: string,
    name: string,
    file: string,
    genre: string,
    meLiked: boolean,
    likes: Array<User>,
    duration: number,
    cover: string
}
