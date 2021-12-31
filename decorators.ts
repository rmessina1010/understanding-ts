
	function greet(a:string,b:string,c:string):any{
        return (target:Object, propertyKey: string, descriptor:PropertyDescriptor )=>{
    		let orig = descriptor.value;
   			 descriptor.value = function () {
				//before
				console.log("before");
				// **let result = orig.apply(this);
				//const t = descriptor.value;//doesnr work
				console.log (`${a} ${this.name} ${b} ${this.age} ${c}`);
 				//after
				console.log("after");
				// **return result;
			}
    		return descriptor;
		}
    }
		 class Person{
 			constructor(public name:string, public age:number ){ }
            @greet('my name is ', ' and I am', ' years old')
			talk(){ console.log(this.name);}
		 }

		const  v= new Person("Roni",43);
		 v.talk();