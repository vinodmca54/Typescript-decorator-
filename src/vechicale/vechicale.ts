function modifyname (target:object, propertyKey:string, propDesc:PropertyDescriptor):any{
       console.log(target);
       console.log(propertyKey);
       console.log(propDesc);
    
       let oldbikename = propDesc.value;

       console.log(oldbikename);

       propDesc.value = function(){

            return "Duke";
       }

       return propDesc;

    }




export class vechicale{

    name:string;
    price:string;

    constructor(name:string,price:string){
        
        this.name = name;
        this.price = price;
    }

    @modifyname
    myName(){
        return this.name;
    }

    myPrice(){
        return this.price;
    }
} 