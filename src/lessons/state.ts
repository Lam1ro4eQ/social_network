// let age = 10;
// let firstName = 'Dimych';
// let isMentor = true;
//
// let ages: Array<number> = [18, 12, 19, 22, 45];
// let ages1: number[] = [18, 12, 19, 22, 45];
// type AgesType = Array<number>
//
//
// let arr: Array<number | string | boolean> = [18, '12', 21, true]
// let arr2: (number | string | boolean)[] = [18, '12', 21, true]
//
//
// let man1: IMan = {name: 'Dima', height: 1.78}
// let man2: ManType = {name: 'Sasha', height: 1.8}
// let car: ICar = {model: 'Reno Stepway', year: 2016}
// type ManType = { name: string, height: number }
// interface IMan {
//     name: string,
//     height: number
// }
// interface ICar {
//     model: string,
//     year: number
// }


// let mans: Array<MansType | Cartype> = [
//     {name: 'Dima', height: 1.78, surname: 'Safronov'},
//     {name: 'Sasha', height: 1.8},
//     {model: 'Reno Stepway', year: 2016}
// ]
// type MansType = {
//     name: string
//     height: number
//     surname?: string
// }
// type Cartype = {
//     model: string,
//     year: number
// }


// function toUpperCase(strings: Array<string>): Array<string>{
//     let result = strings.map(s => s.toUpperCase());
//     return result;
// } // если ничего не возвращает, то : void


// type ManType = { name: string, height: number }
//
// let createMan = (name: string, height: number): ManType => {
//     return {
//         name,
//         height
//     };
// }


// interface ICar {
//     model: string,
//     year: number,
//     on: boolean,
//     turnOn: () => void,
//     rename: (model:string) => void
// }
// let car: ICar = {
//     model: 'Reno Stepway',
//     year: 2016,
//     on: false,
//     turnOn() {
//         this.on = true;
//     },
//     rename(model) {
//         this.model = model;
//     }
// }


// 14) Создайте interface IGarage и типизируйте этот кусок кода:
//     (используя те интерфейсы, которые у вас есть
type CarType = {
    model: string,
    year: number,
    on: boolean,
    turnOn: () => void,
    rename: (model: string) => void
}

type IGarage = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<CarType>
}

let createGarage = ():IGarage => {
    let _cars:Array<CarType> = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}


export default 15;