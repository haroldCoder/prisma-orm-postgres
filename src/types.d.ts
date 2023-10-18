export interface User{
    Id?: number,
    name: string,
    email: string,
    lastname?: string
}

export interface Post{
    Id?: number,
    title: string,
    content?: string,
    authorId: number
}