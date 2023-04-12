let theTeam = [
  {
    name: "Ali Haydar",
    surname: "Güleç",
    age: "29",
    city: "Hatay",
    hobby: "Table Tennis",
    favoriteFood: "Bamya",
    favoriteVideoGame: "Rust",
    favoriteFilm: "The Shawshank Redemption",
    favoriteBook: "Holy Kuran",
    petName: "Paşa",
  },
  {
    name: "Alptekin",
    surname: "OCAKDAN",
    age: 23,
    city: "İstanbul",
    hobby: "gaming",
    favoriteFood: "French Fries",
    favoriteVideoGame: "Crysis",
    favoriteFilm: "Fast & Furious",
    favoriteBook: "Robin Hood",
    petName: "Aslan",
  },
  {
    name: "Hakan",
    surname: "Borazan",
    age: "29",
    city: "Hatay",
    hobby: "game dev",
    favoriteFood: "sarma",
    favoriteFilm: "Godfather",
    favoriteBook: "Robinson Cruose",
    petName: "none",
  },
  {
    name: "thalia",
    surname: "telopoulou",
    age: 25,
    city: "volos",
    hobby: "swimming",
    favoriteFood: "pizza",
    favoriteVideoGame: "theWitcher",
    favoriteFilm: "interstellar",
    favoriteBook: "theGreatGatsby",
    petName: "diego",
  },
];

//*task 1*

let surnamesArr = [];

for (let i = 0; i < theTeam.length; i++) {
  const orderNames = theTeam[i].surname + " " + theTeam[i].name;
  surnamesArr.push(orderNames);
}
let surnameOrder = surnamesArr.sort();
//console.log(surnameOrder);

//*task 2*

let agesArr = [];
for(let i = 0; i < theTeam.length; i++){
  const ages = theTeam[i].age + " " + theTeam[i].name;
  //console.log(ages)
  agesArr.push(ages);
  //console.log(agesArr);
}

let agesOrder = agesArr.sort();
//console.log(agesOrder)

//*task 3*

let sum = 0;
for(let i = 0; i < theTeam.length; i++){
  const ages = +theTeam[i].age;
  sum = (sum + ages) / theTeam.length;
}
//console.log(Math.round(sum))

//*task 4*

for (let i = 0; i < theTeam.length; i++){
  const pets = theTeam[i].petName;
  if (pets !== "none") {
    //console.log(theTeam[i].name + " "+ pets)
  }
}

//*task 5*

let leaguePlayers = [];

for(let i = 0; i < theTeam.length; i++){
  const games = theTeam[i].favoriteVideoGame;
  if(games === "LOL" || games === "League of Legends"){
    leaguePlayers.push(theTeam[i].name);
    //console.log(theTeam[i].name);
  }
} 
if (leaguePlayers.length === 0) {
  leaguePlayers = "Nobody likes LOL"
}
//console.log(leaguePlayers);

//*task 6*

let equalNames = [];

for (let i = 0; i < theTeam.length; i++){
  const names = theTeam[i].name;
  for(let j = 0; j < theTeam.length; j++){
    const namesComparison = theTeam[j].name;
    if (i !== j && names === namesComparison && !equalNames.includes(names)){
      equalNames.push(names)
    } 
  }
}
console.log(equalNames)
