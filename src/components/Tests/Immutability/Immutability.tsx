export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType =  {
    companies: Array<{
        id:number
        title:string
    }>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const copyUser = {
        ...u,
        address: {...u.address, city: city}

    }
    // copyUser.address = {...copyUser.address, city: city}
    return copyUser
}

export function moveUserToOtherHouse(u: UserWithLaptopType, house: number) {
    const copyUser = {
        ...u,
        address: {...u.address, house: house}

    }
    // copyUser.address = {...copyUser.address, city: city}
    return copyUser
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function addNewBooksToUser(u: UserWithBooksType & UserWithLaptopType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export const updateBookToUser = (u: UserWithBooksType & UserWithLaptopType, newBook: string, oldBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBookToUser = (u: UserWithBooksType & UserWithLaptopType, book: string) => ({
    ...u,
    books: u.books.filter(b => b !== book)
})

export function addNewCompanyToUser(u: UserWithLaptopType & WithCompaniesType, id:number,title:string) {
    return {
        ...u,
        companies: [...u.companies, {id,title}]
    }
}
