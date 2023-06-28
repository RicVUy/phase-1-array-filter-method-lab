// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(collection, name){
    const match = [];
    for (const driver of collection) {
        if (driver.toLowerCase() === name.toLowerCase()) {
         match.push(driver)}
    } return match 
}
console.log(findMatching(drivers,'Bobby'));

function fuzzyMatch(collection, name) {
    const begin=[];
     for (const driver of collection) {
        if (driver.substring(0, name.length)=== (name)){
            begin.push(driver)
        }
     } return begin;
}
console.log(fuzzyMatch(drivers,'Sa'))

function matchName(collection,names){
    const same = [];
    for (const driver of collection){
      if (driver.name === names){
        same.push(driver)
      }
    } return same;
  }
 // console.log(matchName(driverss,'Bobby'));