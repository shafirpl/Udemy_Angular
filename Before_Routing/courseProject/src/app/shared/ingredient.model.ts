export class Ingredient {
    // public name: string;
    // public amount: number;


/*
* This will assume that we have 2 public variables, name and amount, and
* what we pass as first parameter will be assigned to the name, and what
* we pass as second parameter will be assigned to number. This is a 
* shortcut for declaring name and amount and then assigning them in 
* the constructor
*/

    constructor(public name: string, public amount: number){
        // this.name = name;
        // this.amount = amount;
    }
}
