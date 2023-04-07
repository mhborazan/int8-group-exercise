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
    petName: "",
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
    favoriteVideoGame: "LOL",
    favoriteBook: "Robinson Cruose",
    petName: "",
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
  {
    name: "Carlos",
    surname: "Gomez",
    age: 30,
    city: "Barcelona",
    hobby: "climbing",
    favoriteFood: "pizza",
    favoriteVideoGame: "God of War",
    favoriteFilm: "Shrek",
    favoriteBook: "the lean startup",
    petName: "Becky & Almos",
  },
  {
    name: "Ali Haydar",
    surname: "Peter",
    age: 19,
    city: "Madrid",
    hobby: "climbing",
    favoriteFood: "pizza",
    favoriteVideoGame: "God of War",
    favoriteFilm: "Shrek",
    favoriteBook: "the lean startup",
    petName: "Becky & Almos",
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

theTeam.sort((person1, person2) => {
  if (person1.surname < person2.surname) {
    return -1;
  }
});

//console.log(theTeam);

theTeam.sort((person1, person2) => {
  if (person1.age < person2.age) {
    return -1;
  }
});

//console.log(theTeam);
let sumOfAges = 0;
theTeam.forEach((person) => {
  sumOfAges += parseInt(person.age);
});

let avgAge = Math.floor(sumOfAges / theTeam.length);
//console.log("The average age of team is ", avgAge);

theTeam.forEach((person) => {
  if (person.petName.length > 0) {
    console.log(
      `${person.name}  ${person.surname}  has pet, pet name is : ${person.petName}`
    );
  }
});

theTeam.forEach((person) => {
  if (
    person.favoriteVideoGame == "LOL" ||
    person.favoriteVideoGame == "League Of Legends"
  ) {
    console.log(`${person.name}  ${person.surname} loves LOL`);
  }
});

//Hakan's Solution
for (let p = 0; p < theTeam.length; p++) {
  for (let k = p + 1; k < theTeam.length; k++) {
    if (theTeam[p].name == theTeam[k].name) {
      console.log(theTeam[p].name);
    }
  }
}

//Ali's Solution
theNamesArray = [];
theTeam.forEach((person) => {
  if (!theNamesArray.includes(person.name)) {
    theNamesArray.push(person.name);
  } else {
    console.log(person.name);
  }
});
