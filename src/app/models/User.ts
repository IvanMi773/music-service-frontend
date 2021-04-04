export interface User {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    subscribers: Array<User>,
    subscriptions: Array<User>,
    tracks: number,
    avatar: string
}
