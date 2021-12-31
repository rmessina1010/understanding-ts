"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ODDBALL"] = "odd";
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 10] = "READ_ONLY";
    Role[Role["AUTHOR"] = 11] = "AUTHOR";
})(Role || (Role = {}));
// const person: {
//     name: string;
//     age: number;
// } =
const person = {
    name: 'Ray',
    age: 50,
    hobbies: ['photography', 'music'],
    role: Role.ADMIN
};
//let enumKey = Object.keys(Colors)[Object.values(Colors).indexOf("BLUE COLOR")];
let favoriteActivities;
favoriteActivities = ['art'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    ///console.log(hobby.map());///!!!ERROR
}
if (person.role === Role.ADMIN) {
    console.log('is admin!');
}
