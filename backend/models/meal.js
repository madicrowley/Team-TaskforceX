//model for the meal table
module.exports = class meal {
    constructor(id, type, qnt, food) {
        this.id = id;
        this.type = type;
        this.qnt = qnt; 
        this.food = food; 
    }   
}