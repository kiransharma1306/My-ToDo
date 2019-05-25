export class Todo {

    title: String;
    date: Date;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    
    
    }
}