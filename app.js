/******************************************************************************

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/


const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];
let combinedAge = 0;

let count = 0;

for (let i = 0; i < people.length; i++) {

  if (people[i].name === "Otto") {
    continue;
  }

  let randomIndex = Math.floor(Math.random() * cities.length);
  people[i].city = cities[randomIndex];

  if (people[i].male === true) {
    people[i].title = "Mr.";
  } else {
    people[i].title = "Ms.";
  }

  people[i].age = people[i].age + 2;

  people[i].hobbies.unshift("coding");

  combinedAge = combinedAge + people[i].age;

  count = count + 1;
}

console.log(people);

let averageAge = 0;
averageAge = combinedAge / count;

console.log("Combined age:", combinedAge);
console.log("Average age:", averageAge);
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// Funksjon som simulerer terningkast
function diceRoller(amount, sides = 6) {

  let results = []; // Tom array for resultat

  for (let i = 0; i < amount; i++) {

    // Lager tilfeldig tall mellom 1 og antall sider
    let randomNumber = Math.floor(Math.random() * sides) + 1;

    results.push(randomNumber); // Legger tallet i arrayet
  }

  return results; // Returnerer ferdig array
}

// Tester funksjonen med andre verdier
console.log(diceRoller(3));
console.log(diceRoller(8));
console.log(diceRoller(2, 12));
console.log(diceRoller(10, 4));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

// Skriv koden for oppgave 3 her

// Funksjon som rydder tekst
function cleanText(wordsArray) {

  let cleanedWords = []; // Ny array for rensede ord

  // Itererer gjennom ordene
  for (let word of wordsArray) {

    let cleaned = word.trim().toLowerCase(); 
    // Fjerner mellomrom og gjør små bokstaver

    cleanedWords.push(cleaned); 
    // Legger ordet i ny array
  }

  // Setter sammen array til én string
  return cleanedWords.join(" ");
}

console.log(
  cleanText([" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]));
console.log(
  cleanText(["   HeLLo", " WoRLd   ", "   TeST   "]));
/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/
// Funksjon som bytter to tegn med hverandre
function doubleSwap(string, charA, charB) {

  let result = ""; // Tom string for resultat

  // Går gjennom hvert tegn i stringen
  for (let char of string) {

    if (char === charA) {
      result += charB; // Bytter A til B
    }

    else if (char === charB) {
      result += charA; // Bytter B til A
    }

    else {
      result += char; // Beholder tegnet
    }
  }

  return result; // Returnerer ferdig string
}

console.log(doubleSwap("this is a string", "i", "s"));
console.log(doubleSwap("banana apple", "a", "b"));
console.log(doubleSwap("frontend development", "e", "o"));
console.log(doubleSwap("javascript is fun", "i", "s"));
