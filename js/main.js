// Лекція 36

// Завдання 1 

let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};

for (let name of usersNames) {
    users[name.toLowerCase()] = name;
}

console.log(users);



// Завдання 2

let salaries = {
    "Mike": 1500,
    "Bob": 1800,
    "Nikola": 1700,
};

function maxSalary(salaries) {
    let maxName = null;
    let maxSalary = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(maxSalary(salaries));

// Завдання 3

let users1 = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'};

const {mike: userMike, bob: userBob, nikola: userNikola} = users1;

console.log(userMike);
console.log(userBob);
console.log(userNikola);