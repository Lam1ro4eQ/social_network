import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./Immutability";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)


})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = upgradeUserLaptop(user, 'Macbook')
    expect(user).not.toBe(movedUser)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(movedUser.laptop.title).toBe('Macbook')
})

test('upgrade address house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'react', 'js']
    }
    const movedUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.laptop)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.house).toBe(99)
})
test('add new book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'react', 'js']
    }
    const movedUser = addNewBooksToUser(user,['ts','rest api'])

    expect(user).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.books[4]).toBe('ts')
    expect(user.books[5]).toBe('rest api')

})