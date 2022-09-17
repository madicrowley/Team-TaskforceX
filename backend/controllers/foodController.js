const db = require('../utils/db');
const food = require('../models/food') 

const getAllFood = async(req, res, next) => {
    try { 
        // get all foods
        await db.ref('foods').get()
        .then(querySnapshot => {
                const foods = []
                querySnapshot.forEach((item) => {
                    console.log(item.val())
                    console.log(item.key)
                    foods.push({ id: item.key, ...item.val()})
                 });
                 res.status(200).send(foods); 
            }); 
       
    }
    catch(error) {
        res.status(100).send(error.message);
    }
}  

const addFood = async(req, res, next) => {
    
    try {
        const data = req.body;
        const name = data.name;
        console.log(data);  
        console.log(name);  
        await db.ref('foods').push(data);
        res.send('Food record added sucessfully');
    }
    catch(error) {
        console.log(error);
        res.status(100).send(error.message);
    }
}  
const updateFood = async(req, res, next) => {
  
    try {
        const data = req.body;   
        const id = data.id;
        const name = data.name;
        const recipe = data.recipe;
        const energy = data.energy;
        const nutration = data.nutration; 
        await db.ref('foods').orderByKey().equalTo(data.id).get()
        .then(querySnapshot => {
              if (querySnapshot.exists()){
                db.ref('foods').child(data.id).update({
                    "name": data.name,
                    "recipe": data.recipe,
                    "energy" : data.energy,
                    "nutration": data.nutration})
                .then(() => {
                    res.status(200).send('Item updated successfully' + res);  
                })                               
              }
              else {
                res.status(404).send("item not found.");
              }  
             }).catch((error) => {
                res.status(404).send('error ' + error);
             });     
        
        // }).then((value) => {
        //     res.status(200).send('Food updated successfully ' + value);  
        // }
        // ).catch((error) => {
        //     res.status(404).send("item not found." + error);
        // }
        // );
        // await db.ref('foods').(name, '==', name).get()
        // .then(querySnapshot => { 
        //     if (querySnapshot.size > 0) {                 
        //         const foodItem = querySnapshot.docs[0].data();
        //         const update_res = db.collection('foods').doc(foodItem.id).update({
        //                 recipe: recipe,
        //                 energy: energy,
        //                 nutration: nutration                    
        //             });  
        //         res.status(200).send('Food updated successfully ' + update_res);  
        //     }
        //     else {
        //         res.status(404).send("Food not found.");
        //       }
           
        // });  
    }
    catch(error) {
        console.log(error);
        res.status(100).send(error.message);
    }
}  

module.exports = {
    addFood,
    getAllFood,
    updateFood
}
