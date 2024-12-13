// Snack 2

//FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


const Team = [
    {
        TeamName: "Milan",
        points: 0,
        foul: 0
    },

    {
        TeamName: "Palermo",
        points: 0,
        foul: 0
    },

    {
        TeamName: "Juventus",
        points: 0,
        foul: 0
    },

    {
        TeamName: "Bari",
        points: 0,
        foul: 0
    }
]


for(let i = 0; i < Team.length; i++) {
    const teams = Team[i]
    teams.points = getRndInteger(5, 90)
    teams.foul = getRndInteger(0, 10)
}

console.log(Team)



const teamfouls = []

for(let i = 0; i < Team.length; i++) {
    const teams = Team[i]
    const carateristics = {
        TeamName: teams.TeamName,
        points: teams.points,
        foul: teams.foul
    }
    teamfouls.push(carateristics)
}


console.log(teamfouls)