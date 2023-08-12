// const football = (team, away) => {
//     team = Number(team)
//     away = Number(away)

//     if (team > away) {
//         return console.log("get 3 point")
//     } else if (away > team) {
//         return console.log("not get point")
//     } else if (away === team) {
//         return console.log("get 1 point")
//     }
// }

// football(1, 1)

//--------------------------------------------//
//TEAM : ท่าเรือใบสีฟ้า (Man City)
//WIN 28: 28*3=84
//Draw 5: 5*1=5
//Lose 5: 5*0

//total 89

const matchPoint = (win,draw)=>{
    win=win*3
    total=win+draw
    return total
}

const calMatchPoint = (win,draw)=> win*3+draw;

console.log(matchPoint(28,5))
console.log(calMatchPoint(28,5))