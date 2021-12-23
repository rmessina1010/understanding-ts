function add( n1:number,n2:number ) : number{
        return n1 + n2;
}

function printResult(num:number):void{
    console.log('Result: '+num);

    //return; // can thenreturn type :undefined;
}

function addAndHandle(n1:number, n2:number,cb:(a:number)=>void){
    const result =n1+n2;
    cb(result);
}

printResult(add(5,12));
//let combinedValue: Function;
let combinedValue: (a:number, b:number)=>number;
combinedValue = add;
//combinedValue = printResult;

//combinedValue=5; // Error not assignable to Function

addAndHandle(10,20, (n)=>console.log(n))
console.log(combinedValue(8,8));

/// let someValue:undefined;
