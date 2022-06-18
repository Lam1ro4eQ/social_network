import {makeHairstyle, UserType} from "./Immutability";




test('reference type test', () => {
    let user: UserType = {
        name:'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)


})

test('change address', () => {
    let user: UserType = {
        name:'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = moveUser(user, 'Kiev')

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)


})