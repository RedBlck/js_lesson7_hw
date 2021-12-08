// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
let arrUsers = [
    new User(10, 'roman', 'red', 'roman@gmail.com', +380965213541),
    new User(2, 'andry', 'panchysh', 'andry@gmai.com', +3809632541),
    new User(3, 'kateryna', 'lodz', 'kater@gmai.com', +38050284687),
    new User(4, 'vitya', 'lodz', 'vitya@gmai.com', +38050854687),
    new User(8, 'bob', 'jemes', 'bob@gmai.com', +38050286587),
    new User(6, 'olya', 'rodry', 'olya@gmai.com', +38050254687),
    new User(7, 'vika', 'leert', 'vika@gmai.com', +38050281487),
    new User(5, 'yura', 'timaer', 'yura@gmai.com', +38050896687),
    new User(9, 'vova', 'tresh', 'vova@gmai.com', +38050283337),
    new User(1, 'bodya', 'durov', 'bodya@gmai.com', +38050245687),
];
// console.log(arrUsers);



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(arrUsers.filter(value => value.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arrUsers.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
     constructor(id, name, surename, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surename = surename;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClient = [
    new Client(10, 'roman', 'red', 'roman@gmail.com', +380965213541, ['aple', 'banan']),
    new Client(2, 'andry', 'panchysh', 'andry@gmai.com', +3809632541, ['aple']),
    new Client(3, 'kateryna', 'lodz', 'kater@gmai.com', +38050284687, ['aple', 'banan', 'phone']),
    new Client(4, 'vitya', 'lodz', 'vitya@gmai.com', +38050854687, ['aple', 'banan']),
    new Client(8, 'bob', 'jemes', 'bob@gmai.com', +38050286587, ['aple', 'banan']),
    new Client(6, 'olya', 'rodry', 'olya@gmai.com', +38050254687, ['aple', 'banan', 'phone', 'point']),
    new Client(7, 'vika', 'leert', 'vika@gmai.com', +38050281487, ['aple']),
    new Client(5, 'yura', 'timaer', 'yura@gmai.com', +38050896687, ['aple', 'banan']),
    new Client(9, 'vova', 'tresh', 'vova@gmai.com', +38050283337, ['aple', 'banan', 'phone', 'point', 'window']),
    new Client(1, 'bodya', 'durov', 'bodya@gmai.com', +38050245687, ['aple', 'banan', 'window']),
];
// console.log(arrClient);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(arrClient.sort((a, b) => a.order.length - b.order.length));