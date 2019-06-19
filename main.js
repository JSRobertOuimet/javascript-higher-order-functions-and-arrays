const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 1987},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Automobile", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 2000, end: 2001},
  {name: "Company Five", category: "Technology", start: 2005, end: 2018},
  {name: "Company Six", category: "Finance", start: 1975, end: 1990},
  {name: "Company Seven", category: "Automobile", start: 2004, end: 2010},
  {name: "Company Eight", category: "Technology", start: 1986, end: 2001},
  {name: "Company Nine", category: "Retail", start: 1992, end: 2003},
];

const ages = [23, 65, 13, 22, 89, 25, 18, 9, 13];

// ==========
// FOR EACH LOOP
companies.forEach(company => {
  console.log(company.category);
});

// ==========
// FOR LOOP
let canDrink = [];

for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);

// ==========
// FILTER
let canDrink = ages.filter(age => {
  if(age >= 21) {
    return true;
  }
});

let canDrink = ages.filter(age => age >=21);
console.log(canDrink);

let retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

let eightiesCompanies = companies.filter(company => company.start >= 1980 && company.end <= 1989);
console.log(eightiesCompanies);

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenYears);

// ==========
// MAP
let companyNames = companies.map(company => company.name);
console.log(companyNames);

// ==========
// SORT
let sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);
console.log(sortedCompanies);

let sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);

// ==========
// REDUCE
let ageSum = 0;

for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

let ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

let totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

let combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);