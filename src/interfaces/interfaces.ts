export interface ITodo {
    id: string,
    title: string,
    order?: number,
    completed?: boolean,
    userId?: number
}

export interface SubMenuItem {
    href: string
    name: string
}