function add( n1:number,n2:number ) : number{
        return n1 + n2;
}

function printResult(num:number):void{
    console.log('Result: '+num);

    //return; // can thenreturn type :undefined;
}


printResult(add(5,12));
//let combinedValue: Function;
let combinedValue: (a:number, b:number)=>number;
combinedValue = add;
//combinedValue = printResult;

//combinedValue=5; // Error not assignable to Function


console.log(combinedValue(8,8));

/// let someValue:undefined;
