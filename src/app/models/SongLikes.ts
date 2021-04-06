import { User } from "./User";

export interface SongLikes {
    id: number,
    likes: Array<User>,
    meLiked: boolean
}
