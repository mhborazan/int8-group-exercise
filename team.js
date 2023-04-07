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
        name:"Alptekin",
        surname:"OCAKDAN",
        age:23,
        city:"İstanbul",
        hobby:"gaming",
        favoriteFood:"French Fries",
        favoriteVideoGame:"Crysis",
        favoriteFilm:"Fast & Furious",
        favoriteBook:"Robin Hood",
        petName:"Aslan"
    }
];

function printTeamAlphabetical(team) {
    // Sort the team array by surname and name
    const sortedTeam = team.sort((a, b) => {
        // Compare surnames first
        const surnameComparison = a.surname.localeCompare(b.surname);
        if (surnameComparison !== 0) {
            return surnameComparison;
        }
        // If surnames are the same, compare names
        return a.name.localeCompare(b.name);
    });

    // Print each team member's name and surname in alphabetical order
    sortedTeam.forEach((member) => {
        console.log(`${member.surname} ${member.name}`);
    });
}

function printTeamAgeOrder(team) {
    // Sort the team array by age
    const sortedTeam = team.sort((a, b) => a.age - b.age);

    // Print each team member's name and age in ascending order
    sortedTeam.forEach((member) => {
        console.log(`${member.name} ${member.age}`);
    });
}

function calculateMiddleAge(team) {
    // Calculate the sum of ages
    const totalAge = team.reduce((sum, member) => sum + parseInt(member.age), 0);

    // Divide by the number of team members to get the average age
    const averageAge = totalAge / team.length;

    // Print the average age rounded to the nearest integer to the console
    console.log(`The average age of the team is ${Math.round(averageAge)}.`);
}

function printTeamWithPets(team) {
    // Filter the team array to only include members with pets
    const teamWithPets = team.filter((member) => member.petName !== "none");

    // Print each team member's name and pet name
    teamWithPets.forEach((member) => {
        console.log(`${member.name} ${member.petName}`);
    });
}

function printTeamWithFavoriteGame(team) {
    // Filter the team array to only include members with "LOL" or "League of Legends" as their favorite game
    const teamWithFavoriteGame = team.filter((member) => {
        const favoriteGame = member.favoriteVideoGame.toLowerCase();
        return favoriteGame.includes("lol") || favoriteGame.includes("league of legends");
    });

    // Print each team member's name
    teamWithFavoriteGame.forEach((member) => {
        console.log(member.name);
    });
}


function printDuplicateNames(team) {
    // Create an array of all the member names
    const names = team.map((member) => member.name);

    // Get an array of the duplicate names
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);

    // Print the names of the duplicate members
    if (duplicates.length > 0) {
        console.log(`The following team members have the same name: ${duplicates.join(", ")}.`);
    } else {
        console.log("There are no team members with the same name.");
    }
}
printTeamAlphabetical(theTeam);

printTeamAgeOrder(theTeam);

calculateMiddleAge(theTeam);

printTeamWithPets(theTeam);

printTeamWithFavoriteGame(theTeam);

printDuplicateNames(theTeam);
