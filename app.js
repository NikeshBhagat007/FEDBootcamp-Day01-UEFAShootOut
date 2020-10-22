// var a=10;
// console.log(a);
// var b=5;


// (a>b)?console.log(a):console.log(b);

// for(var i=1;i<=5;i++)
// console.log(i);

 //var array=[1,2.6,'Nik'];

// for(var i=0;i<array.length;i++)
// console.log(array[i]);

var score = [0,1];

console.log(score);
var turn;
var team1= {
    name:"Real Madrid",
    goals:[],
    score:0
};
console.log(team1);
var team2= {
    name:"Huesca",
    goals:[],
    score:0
};
console.log(team2);
window.onload= ()=>{
    SelectTurn();//Toss turn
    updateButtonText();//update team name 
    updateScore(); //
    updateName();
}

function SelectTurn()
{
    console.log("Select turn function initiated");
    turn = Math.round(Math.random())+1;
    console.log(turn);
}

updateButtonText =()=>{
    var button =document.getElementById('btnShootA');
    console.log(button);
    button.textContent=`${turn===1?team1.name:team2.name} Shot` ;
}

updateScore=()=>{
    document.getElementById('team-1-goals').textContent=team1.score;
    document.getElementById('team-2-goals').textContent=team2.score;
}

function updateName()
{
    document.getElementById('team-1-name').textContent=team1.name;
    document.getElementById('team-2-name').textContent=team2.name;
}