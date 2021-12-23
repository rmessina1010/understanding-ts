
	function greet():any{
        return (target:Object, propertyKey: string, descriptor:PropertyDescriptor )=>{
             const orig =descriptor.value ;
			 console.log(2);
             return descriptor;
		}
    }
		 class Person{
 			constructor(public name:string, public age:number ){ }
            @greet()
			talk(){ console.log(this.name);}
		 }

		const  v= new Person("Roni",43);
		 v.talk();