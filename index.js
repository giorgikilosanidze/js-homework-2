// task1

for (let i = 5; i < 100; i++) {
    console.log(i);
};

// task2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i])
    }
};

// task3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] == 5) {
        console.log("არის");
        break;
    };
};

// task4

let array3 = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < array3.length; i++) {
    sum = sum + array3[i];
};
console.log(sum);

// task5

let array4 = [1, 2, 3, 7, 6, 9];

let sum2 = 0;

for (let i = 0; i < array4.length; i++) {
    sum2 = sum2 + array4[i];
};
console.log(sum2 / array4.length);

// task6

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
    if (array5[i] === 7) {
        continue;
    }
    console.log(array5[i]);
};

// task7

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

console.log(user.studentstatus);

// task 8

let user2 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
};

if (user2.age < 18 && user2.studentstatus === "active") {
    console.log("hello");
} else if (user2.name === "levani") {
    console.log("hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
    console.log("hello world");
} else {
    console.log("error");
};

// task9

let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]];

for (let i = 0; i < array.length; i++) {
    for (let g = 0; g < array[i].length; g++) {
        if (array[i][g] > 0) {
            console.log(array[i][g]);
        };
    };
};

// task10

let numbers = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    };
};

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    };
};

// task11

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for(let i = 0; i < users.length; i++){
if(users[i].status === true){
console.log(users[i]);
};
};










