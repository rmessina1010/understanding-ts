// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum  Role {ODDBALL='odd',ADMIN =5, READ_ONLY=10, AUTHOR}
// const person: {
//     name: string;
//     age: number;
// } =
const person={
    name: 'Ray',
    age:50,
    hobbies:['photography', 'music'],
    role: Role.ADMIN
};
//let enumKey = Object.keys(Colors)[Object.values(Colors).indexOf("BLUE COLOR")];


let favoriteActivities:string [];
favoriteActivities=  ['art']

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    ///console.log(hobby.map());///!!!ERROR
}

if (person.role === Role.ADMIN){
    console.log('is admin!')
}