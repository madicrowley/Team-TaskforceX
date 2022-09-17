//model for the nutrition table
module.exports = class nutrition {
    constructor(id, calories, carbohydrates, protein, fat, sodium, vit_D, vit_B6, vit_A, vit_C, vit_B12, iron) {
        this.id = id;
        this.calories = calories;        
        this.carbohydrates = carbohydrates;        
        this.protein = protein;        
        this.fat = fat;        
        this.sodium = sodium;        
        this.vit_D = vit_D;        
        this.vit_B6 = vit_B6;        
        this.vit_A = vit_A;        
        this.vit_C = vit_C;    
        this.vit_B12 = vit_B12;             
        this.iron = iron;     
    }   
}