//model for the user table
module.exports = class user {
    constructor(id, username, password, email, age, gender, height, weight, diet, allergy, dislike, conditions, nutrition_goal, meal) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;      
        this.diet = diet;
        this.allergy = allergy;
        this.dislike = dislike;
        this.conditions = conditions;
        this.nutrition_goal = nutrition_goal;
        this.meal = meal;
    }   
}