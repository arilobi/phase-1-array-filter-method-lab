function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());  
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'y'));
console.log(fuzzyMatch(drivers, 'mm'));

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);

    
}

const driverTown = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  console.log(matchName(drivers, 'Bobby'));