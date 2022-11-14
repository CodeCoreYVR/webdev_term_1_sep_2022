// https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads
// make variables for all countries on wiki page
// put in array (second step because can easily see list of countries at top of wiki page to list variables needed in array; saves time scrolling!)
// call countries[i].name for whatever country you predict for 1st, 2nd, 3rd
// for MVP, call countries[i].players[i] for whoever you want

let netherlands = {
  name: "Netherlands",
  players: ["Jurriën Timber", "Matthijs de Ligt", "Stefan de Vrij", "Cody Gakpo", "Luuk de Jong"]
}

let qatar = {
  name: "Qatar",
  players: ["Saad Al-Sheeb", "Meshaal Barsham", "Ró-Ró", "Homam Ahmed", "Bassam Al-Rawi"]
}

let senegal = {
  name: "Senegal",
  players: ["Abdou Diallo", "Alfred Gomis", "Pape Matar Sarr", "Cheikhou Kouyaté", "Mamadou Loum"]
}

let england = {
  name: "England",
  players: ["Jordan Pickford", "Harry Kane", "Conor Coady", "Ben White", "James Maddison"]
}

let iran = {
  name: "Iran",
  players: ["Hossein Hosseini", "Morteza Pouraliganji", "Ehsan Hajsafi", "Majid Hosseini", "Saman Ghoddos"]
}

let unitedStates = {
  name: "United States",
  players: ["Matt Turner", "Luca de la Torre", "Timothy Weah", "Josh Sargent", "Josh Sargent"]
}

let wales = {
  name: "Wales",
  players: ["Adam Davies", "Chris Gunter", "Ethan Ampadu", "Neco Williams", "Harry Wilson"]
}

let argentina = {
  name: "Argentina",
  players: ["Gerónimo Rulli", "Lisandro Martínez", "Lisandro Martínez", "Papu Gómez", "Lautaro Martínez"]
}

let mexico = {
  name: "Mexico",
  players: ["Alfredo Talavera", "Héctor Herrera", "Héctor Herrera", "Luis Chávez", "Hirving Lozano"]
}

let poland = {
  name: "Poland",
  players: ["Kamil Grabara", "Kamil Grabara", "Robert Gumny", "Luis Chávez", "Kamil Grosicki"]
}

let saudiArabia = {
  name: "Saudi Arabia",
  players: ["Mohammed Al-Owais", "Sultan Al-Ghanam", "Abdullah Madu", "Hattan Bahebri", "Nasser Al-Dawsari"]
}

let australia = {
  name: "Australia",
  players: ["Miloš Degenek", "Mathew Leckie", "Andrew Redmayne", "Danny Vukovic", "Craig Goodwin"]
}

let denmark = {
  name: "Denmark",
  players: ["Oliver Christensen", "Rasmus Kristensen", "Christian Eriksen", "Mathias Jensen", "Andreas Cornelius"]
}

let france = {
  name: "France",
  players: ["Axel Disasi", "Kylian Mbappé", "Kylian Mbappé", "Kylian Mbappé", "Theo Hernandez"]
}

let tunisia = {
  name: "Tunisia",
  players: ["Montassar Talbi", "Dylan Bronn", "Wahbi Khazri", "Ferjani Sassi", "Ghailene Chaalali"]
}

let costaRica = {
  name: "Costa Rica",
  players: ["Esteban Alvarado", "Celso Borges", "Gerson Torres", "Roan Wilson", "Joel Campbell"]
}

let germany = {
  name: "Germany",
  players: ["Antonio Rüdiger", "Serge Gnabry", "Thomas Müller", "Leroy Sané", "Nico Schlotterbeck"]
}

let japan = {
  name: "Japan",
  players: ["Ko Itakura", "Gaku Shibasaki", "Kaoru Mitoma", "Junya Ito", "Takuma Asano"]
}

let spain = {
  name: "Spain",
  players: ["Ferran Torres", "José Gayà", "Aymeric Laporte", "Pablo Sarabia", "Ansu Fati"]
}

let belgium = {
  name: "Belgium",
  players: ["Jan Vertonghen", "Zeno Debast", "Axel Witsel", "Pablo Sarabia", "Yannick Carrasco"]
}

let canada = {
  name: "Canada",
  players: ["Dayne St. Clair", "Steven Vitória", "Milan Borjan", "Joel Waterman", "David Wotherspoon"]
}

let croatia = {
  name: "Croatia",
  players: ["Dominik Livaković", "Marcelo Brozović", "Marko Livaja", "Mislav Oršić", "Josip Juranović"]
}

let morocco = {
  name: "Morocco",
  players: ["Munir Mohamedi", "Jawad El Yamiq", "Amine Harit", "Youssef En-Nesyri", "Zakaria Aboukhlal"]
}

let brazil = {
  name: "Brazil",
  players: ["Alisson", "Danilo", "Fred", "Éder Militão", "Antony"]
}

let cameroon = {
  name: "Cameroon",
  players: ["Nouhou Tolo", "Pierre Kunde", "Olivier Ntcham", "Christian Bassogog", "Bryan Mbeumo"]
}

let serbia = {
  name: "Serbia",
  players: ["Marko Dmitrović", "Srđan Babić", "Nemanja Radonjić", "Andrija Živković", "Ivan Ilić"]
}

let switzerland = {
  name: "Switzerland",
  players: ["Jonas Omlin", "Nico Elvedi", "Ardon Jashari", "Breel Embolo", "Ruben Vargas"]
}

let ghana = {
  name: "Ghana",
  players: ["Joseph Aidoo", "Daniel-Kofi Kyereh", "Salis Abdul Samed", "Osman Bukari", "Iñaki Williams"]
}

let portugal = {
  name: "Portugal",
  players: ["Pepe", "Rúben Dias", "António Silva", "João Mário", "Matheus Nunes"]
}

let southKorea = {
  name: "South Korea",
  players: ["Kim Moon-hwan", "Yoon Jong-gyu", "Lee Jae-sung", "Na Sang-ho", "Hwang Ui-jo"]
}

let uruguay = {
  name: "Uruguay",
  players: ["Martín Cáceres", "Guillermo Varela", "Matías Vecino", "Federico Valverde", "Nicolás de la Cruz"]
}

let countries = [netherlands, qatar, senegal, england, iran, unitedStates, wales, argentina, mexico, poland, saudiArabia, australia, denmark, france, tunisia, costaRica, germany, japan, spain, belgium, canada, croatia, morocco, brazil, cameroon, serbia, switzerland, ghana, portugal, southKorea, uruguay]

// console.log(countries.length) // should be 31 not including ecuador (team not announced yet)

console.log(`I think ${countries[3].name} will come 1st place`)
console.log(`I think ${countries[16].name} will come 2nd place`)
console.log(`I think ${countries[23].name} will come 3rd place`)

console.log(`In my heart, ${countries[3].players[1]} will be the MVP`)

