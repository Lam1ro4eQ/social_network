const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(user === copyUser)//- что должно быть в консоли?
console.log(user.friends === copyUser.friends)//- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
};

//Проверка:
console.log(user === deepCopyUser)// - что должно быть в консоли?
console.log(user.friends === deepCopyUser.friends)// - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = {...students};

//Проверка:
console.log(students === copyStudents) //- что должно быть в консоли?
console.log(students[0] === copyStudents[0])// - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(deep => {
    return {...deep}
}); // или let deepCopyStudents = students.map(deep => ({...deep}));

//Проверка:
console.log('4*');
console.log(deepCopyStudents)// - что должно быть в консоли?
console.log(students === deepCopyStudents)// - что должно быть в консоли?
console.log(students[0] === deepCopyStudents[0])// - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a, b) =>
    a.name > b.name ? 1 : -1
);
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) =>
    a.scores < b.scores ? 1 : -1
);
console.log('5a');
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(best => best.scores >= 100);
console.log('6');
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log('6a');
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents);
console.log('6b');
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let deepCopyUserNotMarried = students.map(deep => {
    return {...deep}
});

let notMarriedStudents = deepCopyUserNotMarried.filter(n => !n.isMarried);
console.log('7');
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let deepCopyUserstudentsNames = students.map(deep => {
    return {...deep}
});
let studentsNames = deepCopyUserstudentsNames.map(n => ({name: n.name}));
console.log('8');
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
console.log('8a');
let deepCopyUserNames = students.map(deep => {
    return {...deep}
});
let namesWithSpace = deepCopyUserNames.map(n => n.name).join(' ');
console.log(namesWithSpace)
let namesWithComma = deepCopyUserNames.map(n => n.name).join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let deepCopyUserTrueStudents = students.map(deep => {
    return {...deep}
});
let trueStudents = deepCopyUserTrueStudents.map(t => ({...t,isStudent : true}));
console.log('9');
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let deepCopyStudentsWithMarriedNick = students.map(deep => {
    return {...deep}
});
let studentsWithMarriedNick = deepCopyStudentsWithMarriedNick.map(s => s.name === 'Nick' ? {...s,isMarried: true} : s);
console.log('10');
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let deepCopyStudentsAnn = students.map(deep => {
    return {...deep}
});
let ann = deepCopyStudentsAnn.find(item => item.name === 'Ann');
console.log('11');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let deepCopyBestStudent = students.map(deep => {
    return {...deep}
});
let bestStudent = deepCopyBestStudent.reduce( (acc,elem) => acc.scores > elem.scores ? acc:elem);
console.log('12');
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!
let deepCopyScoresSum = students.map(deep => {
    return {...deep}
});
let scoresSum = deepCopyScoresSum.reduce((acc, elem) => acc + elem.scores, 0);
console.log('13');
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
let deepCopyAddFriends = students.map(deep => {
    return {...deep}
});
const addFriends = (deepCopyAddFriends) =>  deepCopyAddFriends.map(s => ({...s,friends: deepCopyAddFriends.map(f => f.name).filter(n => n !== s.name)})); //.filter(n => s.name !== n )

console.log(addFriends(students));









