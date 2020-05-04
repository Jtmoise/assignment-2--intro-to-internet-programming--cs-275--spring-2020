let rice_type;
let amount_rice;

//This listener event triggers when the white rice button is pressed, unhidding the white rice recipe
document.getElementById(`white`).addEventListener(`click`, function(){
    rice_type = `white`;
    document.getElementById(`whiteRecipe`).hidden = false;
    document.getElementById(`californiaRecipe`).hidden = true;
});

//This listener event triggers when the California rice button is pressed, unhidding the California rice recipe
document.getElementById(`California`).addEventListener(`click`, function(){
    rice_type = `California`;
    document.getElementById(`whiteRecipe`).hidden = true;
    document.getElementById(`californiaRecipe`).hidden = false;
});

//This function takes the amount of rice and caluculates the amount of water and oil needed
function storeRice(){
    amount_rice = document.getElementById(`crice`).value;
    calculateWater();
    calculateOil();
}
//This function calculates the amount of water needed for the recipe
function calculateWater(){
    let amount_water;
    if (amount_rice < 0){
        amount_water = 0;
        document.getElementById(`water`).value = amount_water;
    }
    else if (rice_type == `white`){
        amount_water = amount_rice *(8/4);
        document.getElementById(`water`).value = amount_water;
    }
    else{
        amount_water = amount_rice * (16/10);
        document.getElementById(`water`).value = amount_water;
    }
}
//This function calculates the amount of oil needed
function calculateOil(){
    let amount_oil;
    if (amount_rice < 0){
        amount_oil = 0;
        document.getElementById(`oil`).value = amount_oil;
    }
    else if (rice_type == `white`){
        amount_oil = amount_rice * 2;
        document.getElementById(`oil`).value = amount_oil;
    }
    else {
        amount_oil = amount_rice * (20/10);
        document.getElementById(`oil`).value = amount_oil;
    }
}
