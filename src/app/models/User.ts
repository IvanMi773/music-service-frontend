export interface User {
    id: number
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    subscribers: Array<User>,
    subscriptions: Array<User>,
    tracks: number,
    avatar: string
    role: string
}
