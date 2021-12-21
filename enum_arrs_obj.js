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
var person = {
    name: 'Ray',
    age: 50,
    hobbies: ['photography', 'music'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['art'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    ///console.log(hobby.map());///!!!ERROR
}
if (person.role === Role.ADMIN) {
    console.log('is admin!');
}
