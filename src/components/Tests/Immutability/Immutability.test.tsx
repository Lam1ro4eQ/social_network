import {UserType} from "./Immutability";

function hairdresser(u: UserType, power:number) {
    const copy = {
        ...u
    }
    copy.hair = u.hair / power

    return copy
}


test('reference type test', () => {
    let user: UserType = {
        name:'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = hairdresser(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)

})