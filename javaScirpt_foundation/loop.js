// write a while loop that caluclates the sum of all numbers from 1 to 5 stores the result in a variable named sum

// let sum  = 0;
// let i = 1;

// while(i <= 5){
//     sum += i;
//     i++;
// }

// console.log(sum)



// write  a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown

// let countdown = [];
// let j = 5;
// while(j > 0){
//     countdown.push(j);
//     j--;
// }
// console.log(countdown)






// write a do-while loop that prompts a user to enter their favourite tea until they enter '"stop"'; Store each tea type in an array named 'tea Collection'
// let teaCollection = [];
// let tea;

// do{
//     tea = prompt(`Enter your favourite tea: (type "stop" to finish)`)
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }while(tea !== "stop");





// write a do-while loop that adds numbers from 1 to 3  and stores the result in variable named total

// let total = 0;
// let k = 1;
// do{
//     total += k;
//     k++;
// }while(k <= 3)
// console.log(total)






// write a for loop that multiplies each element in the array `[2, 4, 6]` by 2  and stores the results in a new array named `multipliedNumbers`

// let multipliedNumbers = []
// let numbers = [2, 4, 6]

// for(let i = 0;i < numbers.length; i++){
//     // takeNumber = numbers[i] * 2;
//     // multipliedNumbers.push(takeNumber)
//     multipliedNumbers.push(numbers[i] * 2) // this is shoter for of writing the above code
// }

// console.log(multipliedNumbers)



// write a for loop that lists all the  cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array  named 'cityList'

// let cities = ["Paris", "New York", "Tokyo", "London"]
// let cityList = []

// for(let i = 0; i < cities.length; i++){
//     // const element = cities[i]
//     // cityList.push(element)
//     cityList.push(cities[i]) // this is shorter for writing the above code
// }

// console.log(cityList)














// write a for-loop that loops through the array ["green tea", "black tea", "oolong tea"], and stops the loop when it finds "chai"
// store all teas before "chai" in a new array named 'selectedTeas'

// let teas =  ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];

// for(let i = 0; i <teas.length; i++){
//     if(teas[i] === "chai"){
//         break;
//     }else{
//         selectedTeas.push(teas[i])
//     }
// }

// console.log(selectedTeas)





// write a for-loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips "Paris".

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = []

// for(let i = 0; i < cities.length; i++){
//     if(cities[i] === "Paris" || cities[i] === "paris"){
//         continue;
//     }else{
//         visitedCities.push(cities[i])
//     }
// }

// console.log(visitedCities)





// use a for-of-loop to iterate through  the array `[1, 2, 3, 4, 5]` and stop when the number '4' in an array named 'smallNumber'

// let arr = [1, 2, 3, 4, 5]
// let smallNumber = []

// for (const num of arr) {
//     if(num === 4){
//         break;
//     }
//     smallNumber.push(num)
// }

// console.log(smallNumber)







// use a for-of-loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]`, and skip "herbal tea"

// let tea = ["chai", "green tea", "herbal tea", "black tea"];
// let preferedTea = []

// for(const wow of tea){
//     if(wow === "herbal tea"){
//         continue;
//     }
//     preferedTea.push(wow)
// }

// console.log(preferedTea)







// use a for-in-loop through an object containing city populations.
// stop the loop all previous cities populations in a new object named 'cityPoupulations'
// let cititesPopulation = {
//     "London": 8900000,
//     "New York": 8400000,
//     "Paris": 2200000,
//     "Berlin": 3500000
// }

// let cititesPopulation = {
//         "London": 8900000,
//         "New York": 8400000,
//         "Paris": 2200000,
//         "Berlin": 3500000
// }

// let cititesNewPopulations = {}
// for (const city in cititesPopulation) {
//     cititesNewPopulations[city] = cititesPopulation[city]
// }

// for(const city in cititesPopulation){
//      if(city == "Berlin"){
//         break;
//      }
//      cititesNewPopulations[city] = cititesPopulation[city]
// }
// console.log(cititesNewPopulations)

// console.log(Object.keys(cititesPopulation))





// skip any city with a population below 3 million and store the rest in a new object named 'largCities'

// let worldCitites = {
//         "Sydeney": 5000000,
//         "Tokyo": 9000000,
//         "Berlin": 3500000,
//         "Paris": 2200000
// }
// let largCities = {}

// for(const city in worldCitites){
//         if(worldCitites[city] < 3000000){
//                 break;
//         }
//         largCities[city] = worldCitites[city]
// }

// console.log(largCities)







// write a `forEach` loop that iterates through the array '["earl grey", "green tea", "chai", "oolong tea"]`. stop at chai
// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
// let avilableTeas = []

// teaCollection.forEach(function(tea){
//         if(tea === "chai"){
//                 return;
//         }
//         avilableTeas.push(tea)
// });

// console.log(avilableTeas)





// write a for-each-loop that iterates throught the array `["Berlin", "Tokyo", "Sydney", "Paris"]`, skip "Sydeney"
// let worldCitites = ["Berlin", "Tokyo", "Sydney", "Paris"]
// let traveledCitites = []

// worldCitites.forEach(city => {
//         if(city === "Sydney"){
//                 return;
//         }
//         traveledCitites.push(city)
// });
// console.log(traveledCitites)







// write a for loop that iterates through the array [2, 5, 7, 9], skip 7 and rest multiply by 2 and store in new array 'doubledNumbers'

// let arr = [2, 5, 7, 9]
// let doubledNumbers = []

// for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 7){
//                 continue;
//         }
//         doubledNumbers.push(arr[i]*2);
// }

// console.log(doubledNumbers)







// use for-of-loop to iterate through the array ["chai", "green tea", "black tea", "jasmin tea", "herbal tea"]
let myTeas = ["chai", "green tea", "black tea", "jasmin tea", "herbal tea"]
let shortTeas = []

for (const tea of myTeas) {
        if(tea.length > 10){
                break;
        }
        shortTeas.push(tea)
}

console.log(shortTeas)