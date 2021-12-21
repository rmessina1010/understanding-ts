// const person: {
//     name: string;
//     age: number;
// } =
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role:[number, string]
}={
    name: 'Ray',
    age:50,
    hobbies:['photography', 'music'],
    role:[2,'author']
};

person.role.push('admin'); //exception
// errors:
// person.role= [7]
// person.role= [7,'string','ppp']
// person.role= []

let favoriteActivities:string [];
favoriteActivities=  ['art']

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    ///console.log(hobby.map());///!!!ERROR
}